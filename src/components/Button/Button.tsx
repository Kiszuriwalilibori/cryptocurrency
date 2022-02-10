import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { baseCurrencyType, optionType } from '../../types';
import { SelectedCurrenciesContext } from '../../context/currenciesContext';

interface SelectedCurrenciesType {
    currencyBase: baseCurrencyType;
    //currencyCrypto: { value: string; label: string };
    currencyCrypto: optionType;
}

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
