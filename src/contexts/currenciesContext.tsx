import React, { createContext } from "react";
import { CurrencyBase, CurrencyCrypto } from "types";
import { INITIAL_CURRENCY_BASE, INITIAL_CURRENCY_CRYPTO } from "../config";
import { useLocalStorage } from "usehooks-ts";

interface SelectedCurrenciesContextProps {
    currencyBase: CurrencyBase;
    currencyCrypto: CurrencyCrypto;
    setCurrencyBase: (currencyBase: CurrencyBase) => void;
    setCurrencyCrypto: (currencyCrypto: CurrencyCrypto) => void;
}
const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

function SelectedCurrenciesContextProvider({ children }: { children: React.ReactNode }) {
    const [currencyCrypto, setCurrencyCrypto] = useLocalStorage<CurrencyCrypto>(
        "currencyCryptoFromContext",
        INITIAL_CURRENCY_CRYPTO
    );
    const [currencyBase, setCurrencyBase] = useLocalStorage<CurrencyBase>(
        "currencyBaseFromContext",
        INITIAL_CURRENCY_BASE
    );

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
