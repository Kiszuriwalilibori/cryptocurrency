import * as React from "react";

import { Grow } from "@material-ui/core";

import ComparativeTable from "./ComparativeTable";
import CryptoCurrencyPricesContainer from "./CryptoCurencyPricesContainer";
import CryptoCurrencyContainer from "./CryptoCurrencyContainer";
import CryptoCurrencyCurrentPrice from "./CryptoCurrencyCurrentPrice";
import GeneralInfo from "./GeneralInfo";
import InvestButton from "./InvestButton";
import Logo from "./Logo";
import { CurrencyCrypto } from "types";
import { ResultsType } from "../Results";

interface propTypes {
  currencyCrypto: CurrencyCrypto;
  results: ResultsType;
}
/**
 * creates array with all provided informations about crypto
 * @param props
 * @returns
 */
const ResultsTable = (props: propTypes) => {
  const { currencyCrypto, results } = props;

  return (
    <CryptoCurrencyContainer>
      <Grow in={true} timeout={1000}>
        <div className="DataContainer">
          <GeneralInfo name={currencyCrypto.label} />
          {currencyCrypto.image && <Logo URL={currencyCrypto.image} />}
          <CryptoCurrencyPricesContainer>
            {results!.currentPrice && <CryptoCurrencyCurrentPrice currentPrice={results!.currentPrice} />}
            {results!.comparativePricesArray && <ComparativeTable changesArray={results!.comparativePricesArray} />}
            <InvestButton />
          </CryptoCurrencyPricesContainer>
        </div>
      </Grow>
    </CryptoCurrencyContainer>
  );
};

export default ResultsTable;
