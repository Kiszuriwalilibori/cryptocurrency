import { createChanges, formatCurrentPrice } from "functions";

import { BaseCurrency, CryptoPrice, HistoricalPrices } from "types";

interface Args {
    currentCryptocurrencyPrice: CryptoPrice;
    historicalCryptoPrice: HistoricalPrices;
    currencyBase: BaseCurrency;
}

const createResults = (args: Args) => {
    const { currentCryptocurrencyPrice, historicalCryptoPrice, currencyBase } = args;

    const changes = createChanges(currentCryptocurrencyPrice, historicalCryptoPrice);
    const formattedCryptoPrice =
        typeof currentCryptocurrencyPrice === "number"
            ? formatCurrentPrice(currentCryptocurrencyPrice, currencyBase)
            : { "Aktualna cena": "Brak danych" };

    return {
        changes: changes,
        currentPrice: formattedCryptoPrice,
    };
};

export default createResults;
