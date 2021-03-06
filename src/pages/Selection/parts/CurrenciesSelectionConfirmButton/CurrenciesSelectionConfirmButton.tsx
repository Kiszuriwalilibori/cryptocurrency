import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { baseCurrencyType, currencyCryptoType } from '../../../../types';
import { SelectedCurrenciesContext } from '../../../../context/currenciesContext';

interface SelectedCurrenciesType {
    currencyBase: baseCurrencyType;
    currencyCrypto: currencyCryptoType;
}
/**
 * Creates button which - when clicked - accepts chosesn currencies to context and switches to page wit results
 * @param props currency base: base currency, currencyCrypto: cryptocurrency
 * @returns button component
 */
const CurrenciesSelectionConfirmButton = (props: SelectedCurrenciesType): JSX.Element => {
    const { currencyBase, currencyCrypto } = props;
    const history = useHistory();
    const { setCurrencyBase, setCurrencyCrypto } = React.useContext(SelectedCurrenciesContext);
    const isEnabled: boolean = currencyBase && currencyCrypto ? true : false;
    const classes = isEnabled ? 'currencySettingButton enabled' : 'currencySettingButton';
    const pathToResults = isEnabled ? `/${currencyCrypto.label} / ${currencyBase}` : undefined;

    return (
        <button
            className={classes}
            disabled={!isEnabled}
            onClick={() => {
                setCurrencyBase(currencyBase);
                setCurrencyCrypto(currencyCrypto);
                if (pathToResults) history.push(pathToResults);
            }}
        >
            Pokaż kurs
        </button>
    );
};

export default CurrenciesSelectionConfirmButton;
