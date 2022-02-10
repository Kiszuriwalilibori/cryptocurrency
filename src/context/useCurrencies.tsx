import React, { createContext, useState } from 'react';
import { baseCurrencyType, currencyCryptoType } from '../types';
import { initial } from '../config';

interface SelectedCurrenciesContextProps {
    currencyBase: baseCurrencyType;
    currencyCrypto: currencyCryptoType;
    setCurrencyBase: (currencyBase: baseCurrencyType) => void;
    setCurrencyCrypto: (currencyCrypto: currencyCryptoType /*{ value: string; label: string }*/) => void;
}

const useCurrencies = () => {
    const context = createContext<SelectedCurrenciesContextProps>({} as SelectedCurrenciesContextProps);

    if (context) {
        throw new Error('useCurrencies must be used within SelectedCurrenciesContext');
    }
    return context;
};

const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>(
    {} as SelectedCurrenciesContextProps,
);

function SelectedCurrenciesContextProvider({ children }: { children: React.ReactNode }) {
    const [currencyBase, setCurrencyBase] = useState<baseCurrencyType>(initial.currencyBase);
    const [currencyCrypto, setCurrencyCrypto] = useState<currencyCryptoType>(initial.currencyCrypto);

    // Same names will be recognized, no need to do currencyBase:currencyBase
    // const value = React.useMemo(()=>[currencyBase,
    //     currencyCrypto,
    //     setCurrencyBase,
    //     setCurrencyCrypto],[currencyBase,currencyCrypto ])

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
export { SelectedCurrenciesContextProps, useCurrencies, SelectedCurrenciesContextProvider };
