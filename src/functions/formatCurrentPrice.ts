import { baseCurrencyType } from '../types';

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

const formatCurrentPrice = (currentPrice: number, currencyBase: baseCurrencyType): string => {
    const formattedCurrentPrice =
        currentPrice.toString().length > 10 ? currentPrice.toExponential(2) : currentPrice.toString();
    const withCoin = formattedCurrentPrice + ' ' + currencyBase;
    return createObject('Aktualna cena', withCoin);
};

export default formatCurrentPrice;
