import { NotAvailable, NotAv } from "types";

/**
 * calculate percentchange of two numbers (or strings, see return)
 * @param currentPrice
 * @param historicalPrice
 * @returns string being representation of changes with plus/minus and percents mark. In case of being called with string return is 'n/a'string
 */
function getPercentileChange(currentPrice: number, historicalPrice: number | NotAv): string | NotAv {
  if (typeof historicalPrice === "string") return historicalPrice;

  const change = (100 * (currentPrice - historicalPrice)) / historicalPrice;
  const changeStringified = change.toLocaleString("pl-PL", {
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let result: string = "";
  if (change === 0) result = "no change";
  else if (change > 0) result = `+${changeStringified}%`;
  else if (change < 0) result = `${changeStringified}%`;

  return result;
}
export default getPercentileChange;
