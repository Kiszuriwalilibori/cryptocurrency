import * as React from "react";
import VirtualizedSelect from "react-virtualized-select";

import { CurrencyCrypto } from "types";
import { useAvailableCryptos } from "store";

import "../styles/_CryptoCurrencySelectForm.scss";

interface Props {
    setCurrencyCrypto: (arg0: CurrencyCrypto) => void;
    currencyCrypto: CurrencyCrypto | undefined;
}

function createLabelStyle(cryptos: Omit<CurrencyCrypto, "imageURL">[] | undefined) {
    return cryptos && cryptos.length ? "" : "inactivatedSelect"; /// todo to wygląda dziwnie a służy chyba tylko do dezaktywacji vistualselecta
}
/**
 * Creates form which alows choise of cryptocurrency
 * @param currencyCrypto base currency
 * @param setCurrencyCrypto function which sets chosen base currency
 * @returns form component with radiogroup or null if list of cryptos is not available
 */
const CryptoCurrencySelectForm: React.FC<Props> = props => {
    const { currencyCrypto, setCurrencyCrypto } = props;
    const availableCryptos = useAvailableCryptos.use.availableCryptos();
    const labelClass = React.useMemo(() => createLabelStyle(availableCryptos), [JSON.stringify(availableCryptos)]); //todo to wygląda dziwnie

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
                    options={availableCryptos}
                />
            </label>
        </>
    );
};

export default CryptoCurrencySelectForm;
