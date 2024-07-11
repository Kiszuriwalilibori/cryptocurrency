import React from "react";

import { haveResultsChanged, communicateResults, createResults } from "functions";
import { useMessage } from "hooks";
import { CryptoPrice, CurrentCryptocurrencyPriceAPIResponse, HistoricalPrices, ResultsType } from "types";
import { isOKCurrentCryptocurrencyPriceAPIResponse } from "types/guards";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";

export const useCreateAggregatedResults = (
    cryptoCurrencyPriceAPIResponse: CurrentCryptocurrencyPriceAPIResponse,
    historicalCryptoPrice: HistoricalPrices | null
) => {
    const showMessage = useMessage();
    const { currencyBase } = React.useContext(SelectedCurrenciesContext);
    const [results, setResults] = React.useState<ResultsType | null>(null);

    React.useEffect(() => {
        if (cryptoCurrencyPriceAPIResponse && historicalCryptoPrice) {
            let currentCryptocurrencyPrice: CryptoPrice = isOKCurrentCryptocurrencyPriceAPIResponse(
                cryptoCurrencyPriceAPIResponse
            )
                ? cryptoCurrencyPriceAPIResponse[currencyBase]
                : undefined;

            communicateResults(currentCryptocurrencyPrice, showMessage);

            const updatedResults = createResults({ currentCryptocurrencyPrice, historicalCryptoPrice, currencyBase });
            if (haveResultsChanged(results, updatedResults)) {
                setResults(updatedResults);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cryptoCurrencyPriceAPIResponse, historicalCryptoPrice]);

    return results;
};

export default useCreateAggregatedResults;
