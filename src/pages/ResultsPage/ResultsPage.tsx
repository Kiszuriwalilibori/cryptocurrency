import React, { useEffect } from "react";
import axios from "axios";

import { useQuery } from "react-query";
import { useSnackbar } from "notistack";

import ResultsTable from "./parts/ResultsTable";
import FetchingStatusIndicators from "./parts/FetchingStatusIndicators";
import isToday from "./scripts/isToday";
import ReturnToSelectionButton from "./parts/returnToSelectionButton";

import useFetchHistoricalValues from "hooks/useFetchHistoricalValues";

import { CreateURL, createChanges, formatCurrentPrice } from "functions";
import { ResultsType, HistoricalPrices } from "types";
import { initialCurrency, initialIntervalMs } from "../../config";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

interface refType {
  date: Date;
  currentCryptoPrice: number | undefined;
}

/**
 * Presents cryptocurrency price current and historical
 * @returns component
 */
const ResultsPage = (): JSX.Element => {
  const ref = React.useRef<refType>({
    date: new Date(),
    currentCryptoPrice: undefined,
  });

  const { enqueueSnackbar } = useSnackbar();
  const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext);
  const intervalMs = initialIntervalMs;
  const currentURL = CreateURL.current(currencyCrypto.value, currencyBase);
  const [results, setResults] = React.useState<ResultsType | null>(null);
  const [historicalCryptoPrice, sethistoricalCryptoPrice] = React.useState<HistoricalPrices | undefined | null>(undefined);

  const { data: currentCryptoData, error: currentCryptoError } = useQuery(
    "currentCrypto",
    async () => {
      if (!isToday(ref.current.date)) {
        const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
        runFetchHistoricalValues(historicalsURLsArray, currencyBase);
      }
      const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });
      return result.data;
    },
    {
      refetchInterval: intervalMs,
    }
  );

  const { data: historicalData, runFetchHistoricalValues } = useFetchHistoricalValues();

  useEffect(() => {
    const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
    runFetchHistoricalValues(historicalsURLsArray, currencyBase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (currentCryptoData && historicalCryptoPrice) {
      let cryptoPrice = Object.values(currentCryptoData)[0] as number;
      if (cryptoPrice !== ref.current.currentCryptoPrice) {
        ref.current.currentCryptoPrice = cryptoPrice;
        enqueueSnackbar(`Zmiana`, {
          variant: "success",
        });
        const changes = createChanges(cryptoPrice, historicalCryptoPrice);
        const formattedCryptoPrice = formatCurrentPrice(cryptoPrice, currencyBase);
        const result: ResultsType = {
          changes: changes,
          currentPrice: formattedCryptoPrice,
        };
        setResults(result);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCryptoData, historicalCryptoPrice]);

  React.useEffect(() => {
    if (historicalData && historicalCryptoPrice !== historicalData) {
      sethistoricalCryptoPrice(historicalData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historicalData]);

  return (
    <>
      {(currentCryptoError || !results) && <FetchingStatusIndicators label={currencyCrypto.label} result={Boolean(results)} error={currentCryptoError} />}
      <ReturnToSelectionButton />
      {results && currencyCrypto !== initialCurrency.currencyCrypto && <ResultsTable currencyCrypto={currencyCrypto} results={results} />}
    </>
  );
};

export default ResultsPage;
