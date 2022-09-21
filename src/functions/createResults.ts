import { BaseCurrency, HistoricalPrices } from "types";

import createChanges from "./createChanges";
import formatCurrentPrice from "./formatCurrentPrice";

interface Args {
  cryptoPrice: number | string;
  historicalCryptoPrice: HistoricalPrices;
  currencyBase: BaseCurrency;
}

const createResults = (args: Args) => {
  const { cryptoPrice, historicalCryptoPrice, currencyBase } = args;

  const changes = createChanges(cryptoPrice, historicalCryptoPrice);
  const formattedCryptoPrice = typeof cryptoPrice === "number" ? formatCurrentPrice(cryptoPrice, currencyBase) : { "Aktualna cena": "Brak danych" };

  return {
    changes: changes,
    currentPrice: formattedCryptoPrice,
  };
};

export default createResults;
