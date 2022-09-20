import { BaseCurrency, HistoricalPrices, ResultsType } from "types";

import createChanges from "./createChanges";
import formatCurrentPrice from "./formatCurrentPrice";

interface Args {
  cryptoPrice: number;
  historicalCryptoPrice: HistoricalPrices;
  currencyBase: BaseCurrency;
}

const createResults = (args: Args) => {
  const { cryptoPrice, historicalCryptoPrice, currencyBase } = args;

  const changes = createChanges(cryptoPrice, historicalCryptoPrice);
  const formattedCryptoPrice = formatCurrentPrice(cryptoPrice, currencyBase);

  const result: ResultsType = {
    changes: changes,
    currentPrice: formattedCryptoPrice,
  };

  return result;
};

export default createResults;
