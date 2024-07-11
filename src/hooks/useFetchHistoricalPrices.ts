import axios from "axios";

import { useState, useCallback, useEffect } from "react";

import { BaseCurrency, CurrencyCrypto, HistoricalPrices, NotAvailable } from "types";
import { CreateURL } from "functions";
import { useMessage, useBoolean } from "hooks";
import { useLoaderStore } from "store";

const useFetchHistoricalPrices = () => {
    const [historicalCryptoPrice, setData] = useState<HistoricalPrices | null>(null);
    const [error, setError] = useState(false);
    const [loading, , stopLoading] = useBoolean(true);
    const showMessage = useMessage();
    const setLoader = useLoaderStore.use.setLoader();

    useEffect(() => {
        setLoader(true);
    }, []);

    useEffect(() => {
        if (!loading) {
            setLoader(false);
        }
    }, [loading]);

    let historicalPrices: HistoricalPrices = [];

    const fatalError = useCallback(() => {
        setError(true);
        showMessage.error(`No data fetched at all for given endpoints`);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theEndOfRecursiveFetchLoopHandle = () => {
        stopLoading();

        if (historicalPrices.length) {
            setData(historicalPrices);
        } else {
            fatalError();
        }
    };

    const fetchData = async (endpoints: string[], baseCurrency: BaseCurrency) => {
        if (endpoints.length) {
            let URL = endpoints.shift();
            let reducedEndpoints = [...endpoints];

            URL &&
                axios
                    .get(URL, { Apikey: process.env.REACT_APP_API_KEY as string })
                    .then(data => {
                        if (data.hasOwnProperty("data")) {
                            if (data.data.hasOwnProperty(baseCurrency)) {
                                historicalPrices.push(data.data[baseCurrency]);
                            } else {
                                historicalPrices.push(NotAvailable.na);
                            }

                            if (reducedEndpoints.length) {
                                fetchData(reducedEndpoints, baseCurrency);
                            } else {
                                theEndOfRecursiveFetchLoopHandle();
                            }
                        } else {
                            stopLoading();
                            const label = URL ? URL : "unknown crypto";
                            showMessage.warning(`Data for ${label} was broken, corrupted or otherwise invalid`);
                        }
                    })
                    .catch(err => {
                        let code = err.response ? err.response.status : err;
                        showMessage.warning(`Error ${code} encountered when fetching data for ${URL}`);
                        if (reducedEndpoints.length) {
                            fetchData(reducedEndpoints, baseCurrency);
                        } else {
                            theEndOfRecursiveFetchLoopHandle();
                        }
                    });
        } else {
            setError(true);
            showMessage.error(`Empty array of URLs passed to useAxiosArray as argument`);
        }
    };

    const fetchHistoricalPrices = (currencyCrypto: CurrencyCrypto, baseCurrency: BaseCurrency) => {
        fetchData(CreateURL.historical(currencyCrypto, baseCurrency), baseCurrency);
    };

    return { historicalCryptoPrice, error, fetchHistoricalPrices };
};

export default useFetchHistoricalPrices;
