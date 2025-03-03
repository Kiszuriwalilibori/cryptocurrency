import React from "react";

import { haveResultsChanged, createResults } from "functions";

import { AggregatedResults } from "types";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { useCurrentCryptoPrice, useHistoricalPrices } from "store";

export const useCreateAggregatedResults = () => {
    const historicalPrices = useHistoricalPrices.use.historicalPrices();
    const { currencyBase } = React.useContext(SelectedCurrenciesContext);
    const currentPrice = useCurrentCryptoPrice.use.currentCryptoPrice();
    const [results, setResults] = React.useState<AggregatedResults | null>(null);

    React.useEffect(() => {
        if (currentPrice && historicalPrices) {
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
