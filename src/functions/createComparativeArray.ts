import getPercentChange from "./getPercentageChange";
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

  historicalPricesArray.forEach((item, index) => {
    const obj = {} as ComparativeArrayItem;
    obj[IDs[index]] = getPercentChange(currentPrice, item); // tu mogłby być helper z fcp
    result.push(obj);
  });

  return result;
};
export default createComparativeArray;
