import React from "react";

import { haveResultsChanged, createResults } from "functions";

import {
    CryptoPrice,
    CurrentCryptocurrencyPriceAPIResponse,
    HistoricalPrices,
    AggregatedResults,
    CurrencyBase,
} from "types";

import { isOKCurrentCryptocurrencyPriceAPIResponse } from "types/guards";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";

function getCurrentCryptocurrencyPrice(
    response: CurrentCryptocurrencyPriceAPIResponse,
    baseCurrency: CurrencyBase
): CryptoPrice {
    const price: CryptoPrice = isOKCurrentCryptocurrencyPriceAPIResponse(response) ? response[baseCurrency] : undefined;

    return price;
}

export const useCreateAggregatedResults = (
    currentCryptoPrice: CurrentCryptocurrencyPriceAPIResponse,
    historicalCryptoPrice: HistoricalPrices | null,
    isInitialRender: React.MutableRefObject<boolean>
) => {
    function updateInitialRenderStatus(isInitialRender: React.MutableRefObject<boolean>) {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        }
    }

    const { currencyBase } = React.useContext(SelectedCurrenciesContext);
    const [results, setResults] = React.useState<AggregatedResults | null>(null);

    React.useEffect(() => {
        if (currentCryptoPrice && historicalCryptoPrice) {
            const currentCryptocurrencyPrice = getCurrentCryptocurrencyPrice(currentCryptoPrice, currencyBase);

            updateInitialRenderStatus(isInitialRender);

            const updatedResults = createResults({
                currentPrice: currentCryptocurrencyPrice,
                historicalPrices: historicalCryptoPrice,
                currencyBase,
            });
            if (haveResultsChanged(results, updatedResults)) {
                setResults(updatedResults);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCryptoPrice, historicalCryptoPrice]);

    return results;
};

export default useCreateAggregatedResults;
