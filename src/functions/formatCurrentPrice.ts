import { BaseCurrency } from "types";

/**
 * creates  labelled currency base with currency code
 * @param currentPrice current price of cryptocurrency
 * @param currencyBase base currency code (the currency being price unit of cryptocurrencyPrice)
 * @returns object with key being given string and value being current price with currency symbol
 */

const formatCurrentPrice = (currentPrice: number, currencyBase: BaseCurrency) => {
  const formattedCurrentPrice = currentPrice.toString().length > 10 ? currentPrice.toExponential(2) : currentPrice.toString();
  const priceWithCoin = formattedCurrentPrice + " " + currencyBase;

  //return createObject("Aktualna cena", priceWithCoin);
  return { "Aktualna cena": priceWithCoin };
};

export default formatCurrentPrice;

/**
 * todo MasonicCommemorativeToken rzuca błąd w miejscu aktualnej ceny Okazuje się, że w pewnych sytuacjach przechodzi "Error" zamiast aktualnej ceny
 */
