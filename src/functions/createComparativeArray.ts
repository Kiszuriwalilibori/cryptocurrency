import getPercentileChange from "./getPercentileChange";
import { TimestampIDs, ComparativeArrayItem, ComparativeArray, HistoricalPrices } from "types";
import timestamps from "./timestamps";

/**
 * combines current cryptocurrency price, historical cryptocurrency prices to get array with percentage changes in time
 * @param currentPrice
 * @param historicalPricesArray
 * @returns array
 */
const createComparativeArray = (currentPrice: number, historicalPricesArray: HistoricalPrices): ComparativeArray => {
  const result: ComparativeArray = [];
  const IDs: TimestampIDs[] = timestamps.getCodes();

  historicalPricesArray.forEach((historicalPrice, index) => {
    const obj = {} as ComparativeArrayItem;
    obj[IDs[index]] = getPercentileChange(currentPrice, historicalPrice);
    result.push(obj);
  });

  return result;
};
export default createComparativeArray;
