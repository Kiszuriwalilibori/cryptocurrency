import React, { createContext } from 'react';
import { baseCurrencyType, currencyCryptoType } from '../types';
import { initial } from '../config';
import { useLocalStorage } from 'usehooks-ts';

interface SelectedCurrenciesContextProps {
    currencyBase: baseCurrencyType;
    currencyCrypto: currencyCryptoType;
    setCurrencyBase: (currencyBase: baseCurrencyType) => void;
    setCurrencyCrypto: (currencyCrypto: currencyCryptoType) => void;
}
const SelectedCurrenciesContext = createContext<SelectedCurrenciesContextProps>(
    {} as SelectedCurrenciesContextProps,
);

function SelectedCurrenciesContextProvider({ children }: { children: React.ReactNode }) {
    const [currencyCrypto, setCurrencyCrypto] = useLocalStorage<currencyCryptoType>(
        'currencyCryptoFromContext',
        initial.currencyCrypto,
    );
    const [currencyBase, setCurrencyBase] = useLocalStorage<baseCurrencyType>(
        'currencyBaseFromContext',
        initial.currencyBase,
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
