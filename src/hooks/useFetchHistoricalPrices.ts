import axios from "axios";

import { useState, useCallback } from "react";
import { useSnackbar } from "notistack";

import { BaseCurrency, CurrencyCrypto, HistoricalPrices, NotAvailable } from "types";
import { CreateURL } from "functions";

const useFetchHistoricalPrices = () => {
  const [data, setData] = useState<HistoricalPrices | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  let historicalPrices: HistoricalPrices = [];

  const fatalError = useCallback(() => {
    setError(true);
    enqueueSnackbar(`No data fetched at all for given endpoints`, {
      variant: "error",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theEndOfRecursiveFetchLoopHandle = () => {
    setLoading(false);

    if (historicalPrices.length) {
      setData(historicalPrices);
    } else {
      fatalError();
    }
  };

  const fetchData = async (endpoints: string[], baseCurrency: BaseCurrency) => {
    if (endpoints.length) {
      let URL = endpoints.shift();
      let reducedEndpoints = [...endpoints]; /// co ta linika robi, tylko kopię tworzy?

      axios
        .get(URL as string, { Apikey: process.env.REACT_APP_API_KEY as string })
        .then(data => {
          const weatherData = { ...data };
          if (data.hasOwnProperty("data")) {
            if (weatherData.data.hasOwnProperty(baseCurrency)) {
              historicalPrices.push(weatherData.data[baseCurrency]);
            } else {
              historicalPrices.push(NotAvailable.na); // todo coś za czesto wychodzi n/a sprawdzić
            }

            if (reducedEndpoints.length) {
              fetchData(reducedEndpoints, baseCurrency);
            } else {
              theEndOfRecursiveFetchLoopHandle();
            }
          } else {
            setLoading(false);
            const label = URL ? URL : "unknown location";
            enqueueSnackbar(`Data for ${label} was broken, corrupted or otherwise invalid`, {
              variant: "warning",
            });
          }
        })
        .catch(err => {
          let code = err.response ? err.response.status : err;
          enqueueSnackbar(`Error ${code} encountered when fetching data for ${URL}`, {
            variant: "warning",
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
        variant: "error",
      });
    }
  };
  const fetchHistoricalPrices = (currencyCrypto: CurrencyCrypto, baseCurrency: BaseCurrency) => {
    fetchData(CreateURL.historical(currencyCrypto, baseCurrency), baseCurrency);
  };

  return { data, error, loading, fetchHistoricalPrices };
};

export default useFetchHistoricalPrices;

/**
 * todo weather co tu robi?
 */
