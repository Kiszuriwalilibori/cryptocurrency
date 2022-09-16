import { NotAvailable } from "types";

/**
 * calculate percentchange of two numbers (or strings, see return)
 * @param current
 * @param historical
 * @returns string being representation of changes with plus/minus and percents mark. In case of being called with string return is 'n/a'string
 */
function getPercentileChange(current: number, historical: number | NotAvailable): string | NotAvailable {
  let result: string = "";
  console.log(historical);
  if (typeof historical === "number") {
    const historicalPrice = historical;
    let change = (100 * (current - historicalPrice)) / historicalPrice;
    const change_string = change.toLocaleString("pl-PL", {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (change === 0) result = "no change";
    else if (change > 0) result = `+${change_string}%`;
    else if (change < 0) result = `${change_string}%`;
  } else result = "n/a";

  return result;
}
export default getPercentileChange;

/**
 * TODO: troche dziwnie decydowac po typie argumentu. Przychodzi "n/a" czasami. Zrobićwarunek if czy historical = NotAvailabe. Jeżeli tak to od razu return NotAvailable. Niepotrzebny ten result po drodze.
 */
