import * as React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useDebouncedCallback, useFetchHistoricalPrices, useMessage } from "hooks";
import { BlueButton } from "components";
import { CreateURL, hasDateChanged, createResults } from "functions";
import { ResultsType, CryptoPrice } from "types";
import { UPDATE_INTERVAL_MILISECONDS } from "../../config";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { ResultsPageHeader } from "./components";
const ResultsTable = React.lazy(() => import("./components/ResultsTable"));
const FetchStatusIndicator = React.lazy(() => import("./components/FetchStatusIndicator"));

/**
 * Presents cryptocurrency price current and historical
 * @returns component
 */
const ResultsPage = (): JSX.Element => {
    const navigate = useNavigate();
    const showMessage = useMessage();
    const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext); // tu przemianować na selectedBaseCurrency i selectedCryptoCurrency
    const intervalMs = UPDATE_INTERVAL_MILISECONDS;
    const currentURL = CreateURL.current(currencyCrypto.value, currencyBase);
    const [results, setResults] = React.useState<ResultsType | null>(null);

    const { data: fetchedCryptocurrencyPrice, error } = useQuery(
        "currentCrypto",
        async () => {
            if (hasDateChanged(intervalMs)) {
                fetchHistoricalPrices(currencyCrypto, currencyBase);
            }
            const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });

            return result.data;
        },
        {
            refetchInterval: intervalMs,
        }
    );

    const { data: historicalCryptoPrice, fetchHistoricalPrices } = useFetchHistoricalPrices();

    const returnToSelectionPage = useDebouncedCallback<HTMLButtonElement>(navigate, "/");

    React.useEffect(() => {
        fetchHistoricalPrices(currencyCrypto, currencyBase);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (fetchedCryptocurrencyPrice && historicalCryptoPrice) {
            let cryptoPrice = fetchedCryptocurrencyPrice[currencyBase] as CryptoPrice;

            if (typeof cryptoPrice === "number") showMessage.success("Zmiana");
            else showMessage.info("Na serwerze nie ma danych o bieżącym kursie kryptowaluty");

            const result = createResults({ cryptoPrice, historicalCryptoPrice, currencyBase });
            if (JSON.stringify(results) !== JSON.stringify(result)) {
                setResults(result);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchedCryptocurrencyPrice, historicalCryptoPrice]);

    return (
        <>
            <ResultsPageHeader text="Results of query" />
            <main>
                {(error || !results) && (
                    <React.Suspense fallback={null}>
                        <FetchStatusIndicator crypto={currencyCrypto.label} isOK={Boolean(results)} error={error} />
                    </React.Suspense>
                )}
                {results && <BlueButton label="Powrót do wyboru" clickHandler={returnToSelectionPage} />}
                {results && (
                    <React.Suspense fallback={null}>
                        <ResultsTable currencyCrypto={currencyCrypto} results={results} />
                    </React.Suspense>
                )}
            </main>
        </>
    );
};

export default ResultsPage;
