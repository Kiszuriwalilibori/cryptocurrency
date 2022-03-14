import * as React from 'react';
import 'react-virtualized-select/styles.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import VirtualizedSelect from 'react-virtualized-select';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { currencyCryptoType } from '../../../../types';

interface CryptoCurrencyChoiceProps {
    setCurrencyCrypto: Function;
    currencyCrypto: currencyCryptoType;
}
/**
 * Creates form which alows choise of cryptocurrency
 * @param currencyCrypto base currency
 * @param setCurrencyCrypto function which sets chosen base currency
 * @returns form component with radiogroup or null if list of cryptos is not available
 */
const CryptoCurrencySelectForm: React.FC<CryptoCurrencyChoiceProps> = props => {
    const { currencyCrypto, setCurrencyCrypto } = props;
    const cryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
    return cryptos && cryptos.length ? (
        <label>
            <VirtualizedSelect
                value={currencyCrypto}
                className="selector-item virtualized"
                placeholder="Wybierz kryptowalutę"
                onChange={selectValue => {
                    setCurrencyCrypto(selectValue);
                }}
                options={cryptos}
            />
        </label>
    ) : null;
};

export default CryptoCurrencySelectForm;
