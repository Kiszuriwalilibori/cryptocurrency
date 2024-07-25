import { createChanges, formatCurrentPrice } from "functions";

import { CurrencyBase, CryptoPrice, HistoricalPrices } from "types";

interface Args {
    currentPrice: CryptoPrice;
    historicalPrices: HistoricalPrices;
    currencyBase: CurrencyBase;
}

const createResults = (args: Args) => {
    const { currentPrice, historicalPrices, currencyBase } = args;

    const changes = createChanges(currentPrice, historicalPrices);
    const formattedCryptoPrice =
        typeof currentPrice === "number"
            ? formatCurrentPrice(currentPrice, currencyBase)
            : { "Aktualna cena": "Brak danych" };

    return {
        changes: changes,
        currentPrice: formattedCryptoPrice,
    };
};

export default createResults;
