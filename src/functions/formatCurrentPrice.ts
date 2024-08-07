import { CurrencyBase } from "types";

/**
 * creates  labelled currency base with currency code
 * @param currentPrice current price of cryptocurrency
 * @param currencyBase base currency code (the currency being price unit of cryptocurrencyPrice)
 * @returns object with key being given string and value being current price with currency symbol
 */

const formatCurrentPrice = (currentPrice: number, currencyBase: CurrencyBase) => {
    const formattedCurrentPrice =
        currentPrice.toString().length > 10 ? currentPrice.toExponential(2) : currentPrice.toString();
    const priceWithCoin = formattedCurrentPrice + " " + currencyBase;

    return { "Aktualna cena": priceWithCoin };
};

export default formatCurrentPrice;
