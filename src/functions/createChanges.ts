import { getPercentileChange, timestamps } from "functions";

import { ChangesArrayItem, ChangesArray, CryptoPrice, HistoricalPrices, NotAvailable, TimestampIDs } from "types";

/**
 * combines current cryptocurrency price, historical cryptocurrency prices to get array with percentage changes in time
 * @param currentPrice
 * @param historicalPricesArray
 * @returns array
 */
const createChanges = (currentPrice: CryptoPrice, historicalPricesArray: HistoricalPrices): ChangesArray => {
    const result: ChangesArray = [];
    const IDs = timestamps.IDs;

    historicalPricesArray.forEach((historicalPrice, index) => {
        const obj = {} as ChangesArrayItem;

        obj[IDs[index]] =
            typeof currentPrice === "number" ? getPercentileChange(currentPrice, historicalPrice) : NotAvailable.na;

        result.push(obj);
    });

    return result;
};
export default createChanges;
