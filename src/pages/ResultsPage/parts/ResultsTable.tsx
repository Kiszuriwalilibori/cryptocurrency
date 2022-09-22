import * as React from "react";

import { Grow } from "@material-ui/core";

import TableOfChanges from "./TableOfChanges";
import CryptoCurrencyPricesContainer from "./CryptoCurencyPricesContainer";
import CryptoCurrencyContainer from "./CryptoCurrencyContainer";
import CryptoCurrencyCurrentPrice from "./CryptoCurrencyCurrentPrice";
import GeneralInfo from "./GeneralInfo";
import InvestButton from "./InvestButton";
import Logo from "./Logo";
import { CurrencyCrypto, ResultsType } from "types";

interface Props {
  currencyCrypto: CurrencyCrypto;
  results: ResultsType;
}
/**
 * creates array with all provided informations about crypto
 * @param props
 * @returns
 */
const ResultsTable = (props: Props) => {
  const { currencyCrypto, results } = props;

  return (
    <CryptoCurrencyContainer>
      <Grow in={true} timeout={1000}>
        <div className="DataContainer">
          <GeneralInfo name={currencyCrypto.label} />
          {currencyCrypto.image && <Logo URL={currencyCrypto.image} />}
          <CryptoCurrencyPricesContainer>
            {results!.currentPrice && <CryptoCurrencyCurrentPrice currentPrice={results!.currentPrice} />}
            {results!.changes && <TableOfChanges changesArray={results!.changes} />}
            <InvestButton />
          </CryptoCurrencyPricesContainer>
        </div>
      </Grow>
    </CryptoCurrencyContainer>
  );
};

export default ResultsTable;
