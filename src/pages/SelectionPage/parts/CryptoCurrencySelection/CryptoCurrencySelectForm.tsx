import * as React from "react";
// import "react-virtualized-select/styles.css";
// import "react-virtualized/styles.css";
// import "react-virtualized-select/styles.css";
import VirtualizedSelect from "react-virtualized-select";
import { useTypedSelector } from "hooks";
import { shallowEqual } from "react-redux";
import { CurrencyCrypto } from "types";

interface Props {
  setCurrencyCrypto: Function;
  currencyCrypto: CurrencyCrypto;
}
/**
 * Creates form which alows choise of cryptocurrency
 * @param currencyCrypto base currency
 * @param setCurrencyCrypto function which sets chosen base currency
 * @returns form component with radiogroup or null if list of cryptos is not available
 */
const CryptoCurrencySelectForm: React.FC<Props> = props => {
  const { currencyCrypto, setCurrencyCrypto } = props;
  const cryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
  const style = cryptos && cryptos.length ? "" : "inactivatedCryptoCurrencySelectForm";

  console.log(cryptos);

  return (
    <label className={style}>
      <VirtualizedSelect
        value={currencyCrypto}
        className="selector-item virtualized"
        placeholder="Wybierz kryptowalutę"
        onChange={selectValue => {
          setCurrencyCrypto(selectValue);
        }}
        options={cryptos as any}
      />
    </label>
  );
};

export default CryptoCurrencySelectForm;
