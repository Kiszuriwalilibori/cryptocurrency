import createChanges from "./createChanges";
import formatCurrentPrice from "./formatCurrentPrice";

import { BaseCurrency, HistoricalPrices, CryptoPrice } from "types";

interface Args {
  cryptoPrice: CryptoPrice;
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
