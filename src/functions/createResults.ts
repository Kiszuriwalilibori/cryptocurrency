import { createChanges } from "functions";

import { CryptoPrice, HistoricalPrices } from "types";

interface Args {
    currentPrice: CryptoPrice;
    historicalPrices: HistoricalPrices;
}

const createResults = (args: Args) => {
    const { currentPrice, historicalPrices } = args;

    const changes = createChanges(currentPrice, historicalPrices);

    return {
        changes: changes,
    };
};

export default createResults;
