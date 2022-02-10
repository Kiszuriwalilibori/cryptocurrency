import getPercentChange from './getPercentageChange';
import { timestampIDs, comparativeArrayElement, comparativeArray, historicalPricesType } from '../types';
import timestamps from './timestamps';

/**
 * combines current cryptocurrency price, historical cryptocurrency prices to get array with percentage changes in time
 * @param currentPrice
 * @param historicalPricesArray
 * @returns array
 */
const createComparativeArray = (
    currentPrice: number,
    historicalPricesArray: historicalPricesType,
): comparativeArray => {
    const result: comparativeArray = [];
    const IDs: timestampIDs[] = timestamps.getCodes();

    historicalPricesArray.forEach((item, index) => {
        const obj = {} as comparativeArrayElement;
        obj[IDs[index]] = getPercentChange(currentPrice, item);
        result.push(obj);
    });
    return result;
};
export default createComparativeArray;
