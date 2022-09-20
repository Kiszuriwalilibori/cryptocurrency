import { BaseCurrency } from "types";

export const initialIntervalMs = 3000;

export const initialCurrency = {
  currencyBase: "" as BaseCurrency,
  currencyCrypto: {
    value: "",
    label: "",
    image: "",
    description: "",
  },
};