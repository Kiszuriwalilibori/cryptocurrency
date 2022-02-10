import * as React from 'react';
import 'react-virtualized-select/styles.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import VirtualizedSelect from 'react-virtualized-select';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { currencyCryptoType } from '../../../../types';

interface CryptoCurrencyChoiceProps {
    sendSelectedCrypto: Function;
    selectedCrypto: currencyCryptoType;
}

const CryptoCurrencySelectForm: React.FC<CryptoCurrencyChoiceProps> = props => {
    const { selectedCrypto, sendSelectedCrypto } = props;
    const cryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
    return cryptos && cryptos.length ? (
        <VirtualizedSelect
            value={selectedCrypto}
            className="selector-item virtualized"
            placeholder="Wybierz kryptowalutę"
            onChange={selectValue => {
                sendSelectedCrypto(selectValue);
            }}
            options={cryptos}
        />
    ) : null;
};

export default CryptoCurrencySelectForm;
