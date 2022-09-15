import { BaseCurrency } from "types/types";

export const initial = {
  intervalMs: 3000,
  currencyBase: "" as BaseCurrency,
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
