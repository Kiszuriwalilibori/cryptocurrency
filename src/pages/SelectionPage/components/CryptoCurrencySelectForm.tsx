import * as React from "react";
import VirtualizedSelect from "react-virtualized-select";

import { CurrencyCrypto } from "types";
import { useConvertibleCryptos } from "store";

import "../styles/_CryptoCurrencySelectForm.scss";
import useGetLabelClassName from "hooks/useManageLabelClass";

interface Props {
    setCurrencyCrypto: (arg0: CurrencyCrypto) => void;
    currencyCrypto: CurrencyCrypto | undefined;
}

/**
 * Creates form which alows choise of cryptocurrency
 * @param currencyCrypto base currency
 * @param setCurrencyCrypto function which sets chosen base currency
 * @returns form component with radiogroup or null if list of cryptos is not available
 */
const CryptoCurrencySelectForm: React.FC<Props> = props => {
    const { currencyCrypto, setCurrencyCrypto } = props;
    const availableCryptos = useConvertibleCryptos.use.convertibles();
    const labelClassName = useGetLabelClassName(availableCryptos);

    return (
        <>
            <label className={labelClassName}>
                <VirtualizedSelect
                    value={currencyCrypto}
                    className="virtualized-select"
                    placeholder="Wybierz kryptowalutę"
                    onChange={(selectValue: CurrencyCrypto) => {
                        setCurrencyCrypto(selectValue);
                    }}
                    options={availableCryptos}
                />
            </label>
        </>
    );
};

export default CryptoCurrencySelectForm;
