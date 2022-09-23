import * as React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useSnackbar } from "notistack";

//import { /*ResultsTable,*/ FetchStatusIndicator } from "./parts";
import { useFetchHistoricalValues } from "hooks";
import { BlueButton } from "components";
import { CreateURL, hasDateChanged, createResults } from "functions";
import { ResultsType, HistoricalPrices, CryptoPrice } from "types";
import { initialCurrency, initialIntervalMs } from "../../config";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

const ResultsTable = React.lazy(() => import("./parts/ResultsTable"));
const FetchStatusIndicator = React.lazy(() => import("./parts/FetchStatusIndicator"));

interface refType {
  date: Date;
  currentCryptoPrice: CryptoPrice | undefined;
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
      if (hasDateChanged(ref.current.date)) {
        //const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
        fetchHistoricalValues(currencyCrypto, currencyBase);
      }
      const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });

      return result.data;
    },
    {
      refetchInterval: intervalMs,
    }
  );

  const { data: historicalData, fetchHistoricalValues } = useFetchHistoricalValues();

  const returnToSelectionPage = React.useCallback(() => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchHistoricalValues(currencyCrypto, currencyBase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (currentCryptoData && historicalCryptoPrice) {
      let cryptoPrice = Object.values(currentCryptoData)[0] as CryptoPrice;
      if (cryptoPrice !== ref.current.currentCryptoPrice) {
        ref.current.currentCryptoPrice = cryptoPrice;

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
      {(currentCryptoError || !results) && (
        <React.Suspense fallback={null}>
          <FetchStatusIndicator crypto={currencyCrypto.label} result={Boolean(results)} error={currentCryptoError} />
        </React.Suspense>
      )}
      <BlueButton label="Powrót do wyboru" clickHandler={returnToSelectionPage} />
      {results && currencyCrypto !== initialCurrency.currencyCrypto && (
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
 * todo po update do react 17.0.2 można usuwać importy
 * todo z cryptoPrice robi się nast rzeczy 19. zakłada refkę o wartości undefined 79 ustala się realną wartość 80 porównuje z refką 81 updatuje refkę
 * todo w zaadzie data nie wymaga w pewnym przybliżeniu zachowywanai data w refce czy stanie, wystarzczy prównać wartość obecną i wartość srzed 3 sekund
 */
