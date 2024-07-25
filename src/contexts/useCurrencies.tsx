/**
 * Out of use -perhaps will be applied later, that is attempt to rewrite currenciesContext
 */

import React, { createContext, useState } from "react";

import { CurrencyBase, CurrencyCrypto } from "types";
import { INITIAL_CURRENCY_BASE, INITIAL_CURRENCY_CRYPTO } from "../config";

interface SelectedCurrenciesContextProps {
    currencyBase: CurrencyBase;
    currencyCrypto: CurrencyCrypto;
    setCurrencyBase: (currencyBase: CurrencyBase) => void;
    setCurrencyCrypto: (currencyCrypto: CurrencyCrypto) => void;
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
    const [currencyBase, setCurrencyBase] = useState<CurrencyBase>(INITIAL_CURRENCY_BASE);
    const [currencyCrypto, setCurrencyCrypto] = useState<CurrencyCrypto>(INITIAL_CURRENCY_CRYPTO);
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
