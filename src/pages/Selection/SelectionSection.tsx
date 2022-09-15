import * as React from "react";
import { baseCurrencyType, currencyCryptoType } from "types/types";
import BaseCurrencySelectForm from "./parts/BaseCurrencySelection";
import CryptoCurrencySelectForm from "./parts/CryptoCurrencySelection";
import CurrenciesSelectionConfirmButton from "./parts/CurrenciesSelectionConfirmButton";
import CryptoCurrencyDecription from "./parts/CryptoCurrencySelection/cryptoCurrencyDescription";
import withLogo from "../../HOCs/withLogo";

const SelectionSection = () => {
  let [currencyBase, setCurrencyBase] = React.useState<baseCurrencyType | null>(null);
  let [currencyCrypto, setCurrencyCrypto] = React.useState<currencyCryptoType | null>(null);
  return (
    <section className="selection-container">
      <CurrenciesSelectionConfirmButton currencyBase={currencyBase as baseCurrencyType} currencyCrypto={currencyCrypto as currencyCryptoType} />
      <BaseCurrencySelectForm currencyBase={currencyBase as baseCurrencyType} setCurrencyBase={setCurrencyBase} />

      <CryptoCurrencySelectForm currencyCrypto={currencyCrypto as currencyCryptoType} setCurrencyCrypto={setCurrencyCrypto} />
      {currencyCrypto && <CryptoCurrencyDecription currencyCrypto={currencyCrypto} />}
    </section>
  );
};

export default withLogo(SelectionSection);
