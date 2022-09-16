import getPercentileChange from "./getPercentileChange";
import { TimestampIDs, ChangesArrayItem, ChangesArray, HistoricalPrices } from "types";
import timestamps from "./timestamps";

/**
 * combines current cryptocurrency price, historical cryptocurrency prices to get array with percentage changes in time
 * @param currentPrice
 * @param historicalPricesArray
 * @returns array
 */
const createChanges = (currentPrice: number, historicalPricesArray: HistoricalPrices): ChangesArray => {
  const result: ChangesArray = [];
  const IDs: TimestampIDs[] = timestamps.getCodes();

  historicalPricesArray.forEach((historicalPrice, index) => {
    const obj = {} as ChangesArrayItem;
    obj[IDs[index]] = getPercentileChange(currentPrice, historicalPrice);
    result.push(obj);
  });

  return result;
};
export default createChanges;
