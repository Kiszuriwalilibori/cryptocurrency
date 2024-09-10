import React from "react";

import { haveResultsChanged, communicateResults, createResults } from "functions";
import { useMessage } from "hooks";
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
    cryptoCurrencyPriceAPIResponse: CurrentCryptocurrencyPriceAPIResponse,
    historicalCryptoPrice: HistoricalPrices | null,
    isInitialRender: React.MutableRefObject<boolean>
) => {
    function updateInitialRenderStatus(isInitialRender: React.MutableRefObject<boolean>) {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        }
    }
    const showMessage = useMessage();
    const { currencyBase } = React.useContext(SelectedCurrenciesContext);
    const [results, setResults] = React.useState<AggregatedResults | null>(null);

    React.useEffect(() => {
        if (cryptoCurrencyPriceAPIResponse && historicalCryptoPrice) {
            const currentCryptocurrencyPrice = getCurrentCryptocurrencyPrice(
                cryptoCurrencyPriceAPIResponse,
                currencyBase
            );
            communicateResults(currentCryptocurrencyPrice, showMessage, isInitialRender.current);
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
    }, [cryptoCurrencyPriceAPIResponse, historicalCryptoPrice]);

    return results;
};

export default useCreateAggregatedResults;
