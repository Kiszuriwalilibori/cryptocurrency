import { getPercentileChange, timestamps } from "functions";

import { Change, Changes, CryptoPrice, HistoricalPrices, NotAvailable } from "types";

/**
 * combines current cryptocurrency price, historical cryptocurrency prices to get array with percentage changes in time
 * @param currentPrice
 * @param historicalPricesArray
 * @returns array
 */
const createChanges = (currentPrice: CryptoPrice, historicalPricesArray: HistoricalPrices): Changes => {
    const changes: Changes = [];

    const IDs = timestamps.getIDs();

    historicalPricesArray.forEach((historicalPrice, index) => {
        const obj = {} as Change;

        obj[IDs[index]] =
            typeof currentPrice === "number" ? getPercentileChange(currentPrice, historicalPrice) : NotAvailable.na;

        changes.push(obj);
    });

    return changes;
};
export default createChanges;
