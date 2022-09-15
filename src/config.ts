import { baseCurrencyType } from "types/types";

export const initial = {
  intervalMs: 3000,
  currencyBase: "" as baseCurrencyType,
  currencyCrypto: {
    value: "",
    label: "",
    image: "",
    description: "",
  },
};

/**
 * TODO w zaadzie należy podzielić initial, jest brany przez dwa rózne komponenty ięc podzielić go na dwa specyficzne fragmenty
 */
