import { CurrencyBase } from "types";

/**
 * creates  labelled currency base with currency code
 * @param currentPrice current price of cryptocurrency
 * @param currencyBase base currency code (the currency being price unit of cryptocurrencyPrice)
 * @returns object with key being given string and value being current price with currency symbol
 */

const formatCurrentPrice = (currentPrice: number, currencyBase: CurrencyBase) => {
    const preformattedCurrentPrice =
        currentPrice >= 1 ? Math.round(currentPrice * 100) / 100 : Math.round(currentPrice * 100000000) / 100000000;

    const formattedCurrentPrice =
        preformattedCurrentPrice.toString().length > 10
            ? preformattedCurrentPrice.toExponential(2)
            : preformattedCurrentPrice.toString();
    const priceWithCoin = formattedCurrentPrice + " " + currencyBase;

    return { "Aktualna cena": priceWithCoin };
};

export default formatCurrentPrice;
