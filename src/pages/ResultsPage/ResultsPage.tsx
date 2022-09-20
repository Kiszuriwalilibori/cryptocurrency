import React, { useEffect, useCallback } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useSnackbar } from "notistack";

import { ResultsTable, FetchStatusIndicator } from "./parts";
import { useFetchHistoricalValues } from "hooks";
import { BlueButton } from "components";

import { CreateURL, createChanges, formatCurrentPrice, isToday } from "functions";
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

  const history = useHistory();
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

  const returnToSelectionPage = useCallback(() => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
    runFetchHistoricalValues(historicalsURLsArray, currencyBase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (currentCryptoData && historicalCryptoPrice) {
      if (currentCryptoData.Response && currentCryptoData.Response === "Error") {
        enqueueSnackbar(`Błąd danych serwera. Wróć do strony wyboru i spróbuj później. Dokładny opis błędu: ${currentCryptoData.Message}`, {
          variant: "error",
        });
        return;
      }

      let cryptoPrice = Object.values(currentCryptoData)[0] as number;
      console.log(cryptoPrice, "cryptoprice");
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
      {(currentCryptoError || !results) && <FetchStatusIndicator crypto={currencyCrypto.label} result={Boolean(results)} error={currentCryptoError} />}
      <BlueButton label="Powrót do wyboru" clickHandler={returnToSelectionPage} />
      {results && currencyCrypto !== initialCurrency.currencyCrypto && <ResultsTable currencyCrypto={currencyCrypto} results={results} />}
    </>
  );
};

export default ResultsPage;
