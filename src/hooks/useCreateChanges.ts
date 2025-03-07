import React from "react";

import { haveResultsChanged, createResults } from "functions";
import { Changes } from "types";
import { useCurrentCryptoPrice, useHistoricalPrices } from "store";

export const useCreateChanges = () => {
    const historicalPrices = useHistoricalPrices.use.historicalPrices();
    const currentPrice = useCurrentCryptoPrice.use.currentCryptoPrice();
    const [results, setResults] = React.useState<Changes | null>(null);

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

export default useCreateChanges;
