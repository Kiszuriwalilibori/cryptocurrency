import * as React from "react";
import { useHistory } from "react-router-dom";
import { BaseCurrency, CurrencyCrypto } from "types";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { BlueButton } from "components";

interface Props {
  currencyBase: BaseCurrency;
  currencyCrypto: CurrencyCrypto;
}
/**
 * Creates button which - when clicked - accepts chosesn currencies to context and switches to page wit results
 * @param props currency base: base currency, currencyCrypto: cryptocurrency
 * @returns button component
 */
const ConfirmButton = (props: Props): JSX.Element => {
  const { currencyBase, currencyCrypto } = props;
  const history = useHistory();
  const { setCurrencyBase, setCurrencyCrypto } = React.useContext(SelectedCurrenciesContext);
  const isEnabled = currencyBase && currencyCrypto ? true : false;
  const pathToResults = isEnabled ? `/${currencyCrypto.label} / ${currencyBase}` : undefined;

  const confirmChoice = React.useCallback(() => {
    setCurrencyBase(currencyBase);
    setCurrencyCrypto(currencyCrypto);
    if (pathToResults) history.push(pathToResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathToResults]);

  return <BlueButton classes={isEnabled ? "enabled" : ""} isEnabled={isEnabled} clickHandler={confirmChoice} label="Pokaż kurs" />;
};

export default ConfirmButton;
