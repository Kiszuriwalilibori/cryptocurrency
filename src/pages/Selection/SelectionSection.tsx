import * as React from "react";
import { BaseCurrency, CurrencyCrypto } from "types/types";
import BaseCurrencySelectForm from "./parts/BaseCurrencySelection";
import CryptoCurrencySelectForm from "./parts/CryptoCurrencySelection";
import CurrenciesSelectionConfirmButton from "./parts/CurrenciesSelectionConfirmButton";
import CryptoCurrencyDecription from "./parts/CryptoCurrencySelection/cryptoCurrencyDescription";
import withLogo from "../../HOCs/withLogo";

const SelectionSection = () => {
  let [currencyBase, setCurrencyBase] = React.useState<BaseCurrency | null>(null);
  let [currencyCrypto, setCurrencyCrypto] = React.useState<CurrencyCrypto | null>(null);
  return (
    <section className="selection-container">
      <CurrenciesSelectionConfirmButton currencyBase={currencyBase as BaseCurrency} currencyCrypto={currencyCrypto as CurrencyCrypto} />
      <BaseCurrencySelectForm currencyBase={currencyBase as BaseCurrency} setCurrencyBase={setCurrencyBase} />

      <CryptoCurrencySelectForm currencyCrypto={currencyCrypto as CurrencyCrypto} setCurrencyCrypto={setCurrencyCrypto} />
      {currencyCrypto && <CryptoCurrencyDecription currencyCrypto={currencyCrypto} />}
    </section>
  );
};

export default withLogo(SelectionSection);
