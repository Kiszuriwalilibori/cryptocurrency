import * as React from "react";
import { BaseCurrency, CurrencyCrypto } from "types";
import BaseCurrencySelectForm from "./parts/BaseCurrencySelection";
import CryptoCurrencySelectForm from "./parts/CryptoCurrencySelection";
import CurrenciesSelectionConfirmButton from "./parts/ConfirmButton";
import CryptoCurrencyDecription from "./parts/CryptoCurrencySelection/CryptoCurrencyDescription";
import withLogo from "HOCs/withLogo";

import "./_SelectionSection.scss";

const SelectionSection = () => {
  let [currencyBase, setCurrencyBase] = React.useState<BaseCurrency | null>(null);
  let [currencyCrypto, setCurrencyCrypto] = React.useState<CurrencyCrypto | undefined>(undefined);

  return (
    <section className="SelectionSection">
      <CurrenciesSelectionConfirmButton currencyBase={currencyBase as BaseCurrency} currencyCrypto={currencyCrypto as CurrencyCrypto} />
      <BaseCurrencySelectForm currencyBase={currencyBase} setCurrencyBase={setCurrencyBase} />
      <CryptoCurrencySelectForm currencyCrypto={currencyCrypto} setCurrencyCrypto={setCurrencyCrypto} />
      {currencyCrypto?.description && <CryptoCurrencyDecription description={currencyCrypto.description} />}
    </section>
  );
};

export default withLogo(SelectionSection);