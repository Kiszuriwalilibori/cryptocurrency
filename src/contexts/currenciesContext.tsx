import React, { createContext } from "react";
import { BaseCurrency, CurrencyCrypto } from "types/types";
import { initialCurrency } from "../config";
import { useLocalStorage } from "usehooks-ts";

interface SelectedCurrenciesContextProps {
  currencyBase: BaseCurrency;
  currencyCrypto: CurrencyCrypto;
  setCurrencyBase: (currencyBase: BaseCurrency) => void;
  setCurrencyCrypto: (currencyCrypto: CurrencyCrypto) => void;
}
const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

function SelectedCurrenciesContextProvider({ children }: { children: React.ReactNode }) {
  const [currencyCrypto, setCurrencyCrypto] = useLocalStorage<CurrencyCrypto>("currencyCryptoFromContext", initialCurrency.currencyCrypto);
  const [currencyBase, setCurrencyBase] = useLocalStorage<BaseCurrency>("currencyBaseFromContext", initialCurrency.currencyBase);

  return (
    <SelectedCurrenciesContext.Provider
      value={{
        currencyBase,
        currencyCrypto,
        setCurrencyBase,
        setCurrencyCrypto,
      }}
    >
      {children}
    </SelectedCurrenciesContext.Provider>
  );
}
export { SelectedCurrenciesContextProps, SelectedCurrenciesContext, SelectedCurrenciesContextProvider };
