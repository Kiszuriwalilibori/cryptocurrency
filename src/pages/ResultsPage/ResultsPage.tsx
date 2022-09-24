import * as React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { useFetchHistoricalPrices } from "hooks";
import { BlueButton } from "components";
import { CreateURL, hasDateChanged, createResults } from "functions";
import { ResultsType, HistoricalPrices, CryptoPrice } from "types";
import { initialIntervalMs } from "../../config";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

const ResultsTable = React.lazy(() => import("./parts/ResultsTable"));
const FetchStatusIndicator = React.lazy(() => import("./parts/FetchStatusIndicator"));

interface refType {
  date: Date;
}

/**
 * Presents cryptocurrency price current and historical
 * @returns component
 */
const ResultsPage = (): JSX.Element => {
  const ref = React.useRef<refType>({
    date: new Date(),
  });

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext); // tu przemianować na selectedBaseCurrency i selectedCryptoCurrency
  const intervalMs = initialIntervalMs;
  const currentURL = CreateURL.current(currencyCrypto.value, currencyBase);
  const [results, setResults] = React.useState<ResultsType | null>(null);
  const [historicalCryptoPrice, sethistoricalCryptoPrice] = React.useState<HistoricalPrices | undefined | null>(undefined); // todo czy ten stan jest na pewno potrzebny

  const { data: fetchedCryptocurrencyPrice, error } = useQuery(
    "currentCrypto",
    async () => {
      if (hasDateChanged(ref.current.date)) {
        fetchHistoricalPrices(currencyCrypto, currencyBase);
      }
      const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });

      return result.data;
    },
    {
      refetchInterval: intervalMs,
    }
  );

  const { data: fetchedHistoricalPrices, fetchHistoricalPrices } = useFetchHistoricalPrices();

  const returnToSelectionPage = React.useCallback(() => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchHistoricalPrices(currencyCrypto, currencyBase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (fetchedCryptocurrencyPrice && historicalCryptoPrice) {
      let cryptoPrice = fetchedCryptocurrencyPrice[currencyBase] as CryptoPrice;
      typeof cryptoPrice === "number" &&
        enqueueSnackbar(`Zmiana`, {
          variant: "success",
        });

      typeof cryptoPrice === "string" &&
        enqueueSnackbar(`Na serwerze nie ma danych o bieżącym kursie kryptowaluty`, {
          variant: "info",
        });

      const result = createResults({ cryptoPrice, historicalCryptoPrice, currencyBase });
      setResults(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedCryptocurrencyPrice, historicalCryptoPrice]);

  React.useEffect(() => {
    if (fetchedHistoricalPrices && historicalCryptoPrice !== fetchedHistoricalPrices) {
      sethistoricalCryptoPrice(fetchedHistoricalPrices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedHistoricalPrices]);

  return (
    <>
      {(error || !results) && (
        <React.Suspense fallback={null}>
          <FetchStatusIndicator crypto={currencyCrypto.label} result={Boolean(results)} error={error} />
        </React.Suspense>
      )}
      <BlueButton label="Powrót do wyboru" clickHandler={returnToSelectionPage} />
      {results && (
        <React.Suspense fallback={null}>
          <ResultsTable currencyCrypto={currencyCrypto} results={results} />
        </React.Suspense>
      )}
    </>
  );
};

export default ResultsPage;

/**
 * todo wydzielić media query do osobnego pliku i wczytywać ten plik warunkowo. Ale, co sie stanie kiedy zrobimy resize?
 * todo rozdzielić ref na składowe bo tak bez sensu, nia mają nic wspólnego, albo hooka na prznajmniej cryptoprice
 * todo doczytać o concurrent axios
 *
 *
 * todo w zaadzie data nie wymaga w pewnym przybliżeniu zachowywanai data w refce czy stanie, wystarzczy prównać wartość obecną i wartość srzed 3 sekund
 */
