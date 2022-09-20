import * as React from "react";
import VirtualizedSelect from "react-virtualized-select";
import { useTypedSelector } from "hooks";
import { shallowEqual } from "react-redux";
import { CurrencyCrypto } from "types";

import FetchListOfAllCryptos from "pages/SelectionPage/fetchListOfAllCryptos";
import "./_CryptoCurrencySelectForm.scss";
interface Props {
  setCurrencyCrypto: Function;
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
  const cryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
  const style = cryptos && cryptos.length ? "" : "inactivatedCryptoCurrencySelectForm";

  return (
    <FetchListOfAllCryptos>
      <label className={style}>
        <VirtualizedSelect
          value={currencyCrypto}
          className="selector-item virtualized-select"
          placeholder="Wybierz kryptowalutę"
          onChange={selectValue => {
            setCurrencyCrypto(selectValue);
          }}
          options={cryptos as any}
        />
      </label>
    </FetchListOfAllCryptos>
  );
};

export default CryptoCurrencySelectForm;
