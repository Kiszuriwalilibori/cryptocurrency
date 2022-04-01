import * as React from 'react';
import { baseCurrencyType, currencyCryptoType } from '../../../types';
import BaseCurrencySelectForm from './BaseCurrencySelection';
import CryptoCurrencySelectForm from './CryptoCurrencySelection';
import CurrenciesSelectionConfirmButton from './CurrenciesSelectionConfirmButton';
import SearchPageContainer from './SearchPage_Container';
import CryptoCurrencyDecription from '../parts/CryptoCurrencySelection/cryptoCurrencyDescription';

const SelectionSection = () => {
    let [currencyBase, setCurrencyBase] = React.useState<baseCurrencyType | null>(null);
    let [currencyCrypto, setCurrencyCrypto] = React.useState<currencyCryptoType | null>(null);
    return (
        <SearchPageContainer>
            <CurrenciesSelectionConfirmButton
                currencyBase={currencyBase as baseCurrencyType}
                currencyCrypto={currencyCrypto as currencyCryptoType}
            />
            <BaseCurrencySelectForm
                currencyBase={currencyBase as baseCurrencyType}
                setCurrencyBase={setCurrencyBase}
            />

            <CryptoCurrencySelectForm
                currencyCrypto={currencyCrypto as currencyCryptoType}
                setCurrencyCrypto={setCurrencyCrypto}
            />
            {currencyCrypto && <CryptoCurrencyDecription currencyCrypto={currencyCrypto} />}
        </SearchPageContainer>
    );
};

export default SelectionSection;
