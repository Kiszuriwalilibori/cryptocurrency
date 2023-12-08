import * as React from "react";
import VirtualizedSelect from "react-virtualized-select";

import { CurrencyCrypto } from "types";
import { useFetchListOfCryptos } from "hooks";
import Loader from "components/Loader/Loader";

import "../styles/_CryptoCurrencySelectForm.scss";

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
    const { isLoading, data: cryptos } = useFetchListOfCryptos();
    const style = cryptos && cryptos.length ? "" : "inactivatedSelect";

    return (
        <>
            <label className={style}>
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
            {isLoading && <Loader />}
        </>
    );
};

export default CryptoCurrencySelectForm;
