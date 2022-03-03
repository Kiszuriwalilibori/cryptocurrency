/**
 * Out of use -perhaps will be applied later, that is attempt to rewrite currenciesContext
 */

import React, { createContext, useState } from 'react';
import { baseCurrencyType, currencyCryptoType } from '../types';
import { initial } from '../config';

interface SelectedCurrenciesContextProps {
    currencyBase: baseCurrencyType;
    currencyCrypto: currencyCryptoType;
    setCurrencyBase: (currencyBase: baseCurrencyType) => void;
    setCurrencyCrypto: (currencyCrypto: currencyCryptoType /*{ value: string; label: string }*/) => void;
}

const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>(
    {} as SelectedCurrenciesContextProps,
);

const useCurrencies = () => {
    const context = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

    if (!context) {
        throw new Error('useCurrencies must be used within SelectedCurrenciesContext');
    }
    return context;
};
const SelectedCurrenciesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currencyBase, setCurrencyBase] = useState<baseCurrencyType>(initial.currencyBase);
    const [currencyCrypto, setCurrencyCrypto] = useState<currencyCryptoType>(initial.currencyCrypto);
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
