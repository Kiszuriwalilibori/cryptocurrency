/**
 * Out of use -perhaps will be applied later, that is attempt to rewrite currenciesContext
 */

import React, { createContext, useState } from "react";
import { BaseCurrency, CurrencyCrypto } from "types/types";
import { initialCurrency } from "../config";

interface SelectedCurrenciesContextProps {
  currencyBase: BaseCurrency;
  currencyCrypto: CurrencyCrypto;
  setCurrencyBase: (currencyBase: BaseCurrency) => void;
  setCurrencyCrypto: (currencyCrypto: CurrencyCrypto /*{ value: string; label: string }*/) => void;
}

const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

const useCurrencies = () => {
  const context = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

  if (!context) {
    throw new Error("useCurrencies must be used within SelectedCurrenciesContext");
  }
  return context;
};
const SelectedCurrenciesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyBase, setCurrencyBase] = useState<BaseCurrency>(initialCurrency.currencyBase);
  const [currencyCrypto, setCurrencyCrypto] = useState<CurrencyCrypto>(initialCurrency.currencyCrypto);
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
};
export { SelectedCurrenciesContextProps, useCurrencies, SelectedCurrenciesContextProvider };
