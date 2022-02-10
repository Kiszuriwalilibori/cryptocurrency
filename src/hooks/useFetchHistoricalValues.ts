import { useState, useCallback } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { baseCurrencyType, historicalPricesType } from '../types';

const useFetchHistoricalValues = () => {
    const [data, setData] = useState<historicalPricesType | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { enqueueSnackbar } = useSnackbar();

    var historicalPrices: historicalPricesType = [];

    const fatalError = useCallback(() => {
        setError(true);
        enqueueSnackbar(`No data fetched at all for endpoints`, {
            variant: 'error',
        });
    }, []);

    const theEndOfRecursiveFetchLoopHandle = () => {
        setLoading(false);

        if (historicalPrices.length) {
            setData(historicalPrices);
        } else {
            fatalError();
        }
    };

    const fetchData = async (endpoints: string[], baseCurrency: baseCurrencyType) => {
        if (endpoints.length) {
            let URL = endpoints.shift();
            let reducedEndpoints = [...endpoints];

            axios
                .get(URL as string, { Apikey: process.env.REACT_APP_API_KEY as string })
                .then(data => {
                    const weatherData = { ...data };

                    if (data.hasOwnProperty('data')) {
                        if (weatherData.data.hasOwnProperty(baseCurrency)) {
                            historicalPrices.push(weatherData.data[baseCurrency]);
                        } else {
                            historicalPrices.push('n/a');
                        }

                        if (reducedEndpoints.length) {
                            fetchData(reducedEndpoints, baseCurrency);
                        } else {
                            theEndOfRecursiveFetchLoopHandle();
                        }
                    } else {
                        setLoading(false);
                        const label = URL ? URL : 'unknown location';
                        enqueueSnackbar(`Data for ${label} was broken, corrupted or otherwise invalid`, {
                            variant: 'warning',
                        });
                    }
                })
                .catch(err => {
                    let code = err.response ? err.response.status : err;
                    enqueueSnackbar(`Error ${code} encountered when fetching data for ${URL}`, {
                        variant: 'warning',
                    });
                    if (reducedEndpoints.length) {
                        fetchData(reducedEndpoints, baseCurrency);
                    } else {
                        theEndOfRecursiveFetchLoopHandle();
                    }
                });
        } else {
            setError(true);
            enqueueSnackbar(`Empty array of URLs passed to useAxiosArray as argument`, {
                variant: 'error',
            });
        }
    };
    const runFetchHistoricalValues = (endpoints: string[], baseCurrency: baseCurrencyType) =>
        fetchData(endpoints, baseCurrency);

    return { data, error, loading, runFetchHistoricalValues };
};

export default useFetchHistoricalValues;
