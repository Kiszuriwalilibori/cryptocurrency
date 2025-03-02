import React from "react";

import { haveResultsChanged, createResults } from "functions";

import { HistoricalPrices, AggregatedResults } from "types";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { useCurrentCryptoPrice } from "store";

export const useCreateAggregatedResults = (
    historicalPrices: HistoricalPrices | null,
    isInitialRender: React.MutableRefObject<boolean>
) => {
    function updateInitialRenderStatus(isInitialRender: React.MutableRefObject<boolean>) {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        }
    }

    const { currencyBase } = React.useContext(SelectedCurrenciesContext);
    const currentPrice = useCurrentCryptoPrice.use.currentCryptoPrice();
    const [results, setResults] = React.useState<AggregatedResults | null>(null);

    React.useEffect(() => {
        if (currentPrice && historicalPrices) {
            updateInitialRenderStatus(isInitialRender);

            const updatedResults = createResults({
                currentPrice: currentPrice,
                historicalPrices: historicalPrices,
                currencyBase,
            });
            if (haveResultsChanged(results, updatedResults)) {
                setResults(updatedResults);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPrice, historicalPrices]);

    return results;
};

export default useCreateAggregatedResults;
