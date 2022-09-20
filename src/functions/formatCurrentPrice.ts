import { BaseCurrency } from "types";

function createObject(key: string, value: any): any {
  const pair = {} as { [key: string]: any };
  pair[key] = value;
  return pair;
}

/**
 * creates  labelled currency base with currency code
 * @param currentPrice current price of cryptocurrency
 * @param currencyBase base currency code (the currency being price unit of cryptocurrencyPrice)
 * @returns object with key being given string and value being current price with currency symbol
 */

const formatCurrentPrice = (currentPrice: number, currencyBase: BaseCurrency): string => {
  const formattedCurrentPrice = currentPrice.toString().length > 10 ? currentPrice.toExponential(2) : currentPrice.toString();
  const priceWithCoin = formattedCurrentPrice + " " + currencyBase;

  return createObject("Aktualna cena", priceWithCoin);
};

export default formatCurrentPrice;

/**
 * todo bład typu, ta funkcja zwraca obiekt a nie string, sprawdzic dalej dokładnie
 */
