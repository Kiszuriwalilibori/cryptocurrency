import React from "react";

import { haveResultsChanged, createResults } from "functions";
import { ChangesArray } from "types";
import { useCurrentCryptoPrice, useHistoricalPrices } from "store";

export const useCreateAggregatedResults = () => {
    const historicalPrices = useHistoricalPrices.use.historicalPrices();
    const currentPrice = useCurrentCryptoPrice.use.currentCryptoPrice();
    const [results, setResults] = React.useState<ChangesArray | null>(null);

    React.useEffect(() => {
        if (currentPrice && historicalPrices) {
            const updatedResults = createResults({
                currentPrice: currentPrice,
                historicalPrices: historicalPrices,
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
