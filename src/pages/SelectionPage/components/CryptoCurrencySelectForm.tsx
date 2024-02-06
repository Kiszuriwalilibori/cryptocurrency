import * as React from "react";
import VirtualizedSelect from "react-virtualized-select";

import { CurrencyCrypto } from "types";
import { useDelayedCondition, useFetchListOfCryptos } from "hooks";
import Loader from "components/Loader/Loader";

import "../styles/_CryptoCurrencySelectForm.scss";

interface Props {
    setCurrencyCrypto: (arg0: CurrencyCrypto) => void;
    currencyCrypto: CurrencyCrypto | undefined;
}

function createLabelStyle(cryptos: Omit<CurrencyCrypto, "imageURL">[] | undefined) {
    return cryptos && cryptos.length ? "" : "inactivatedSelect";
}
/**
 * Creates form which alows choise of cryptocurrency
 * @param currencyCrypto base currency
 * @param setCurrencyCrypto function which sets chosen base currency
 * @returns form component with radiogroup or null if list of cryptos is not available
 */
const CryptoCurrencySelectForm: React.FC<Props> = props => {
    const { currencyCrypto, setCurrencyCrypto } = props;
    const { isLoading, data: cryptos } = useFetchListOfCryptos();
    const labelClass = React.useMemo(() => createLabelStyle(cryptos), [JSON.stringify(cryptos)]);
    const shouldRenderLoader = useDelayedCondition(isLoading);

    return (
        <>
            <label className={labelClass}>
                <VirtualizedSelect
                    value={currencyCrypto}
                    className="virtualized-select"
                    placeholder="Wybierz kryptowalutę"
                    onChange={(selectValue: CurrencyCrypto) => {
                        setCurrencyCrypto(selectValue);
                    }}
                    options={cryptos}
                />
            </label>
            {shouldRenderLoader && <Loader />}
        </>
    );
};

export default CryptoCurrencySelectForm;
