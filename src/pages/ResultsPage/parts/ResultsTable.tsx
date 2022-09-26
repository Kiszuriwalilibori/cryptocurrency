import { Grow } from "@material-ui/core";

import Changes from "./Changes";
import CryptoCurrencyContainer from "./CryptoCurrencyContainer";
import CurrentPrice from "./CurrentPrice";
import GeneralInformation from "./GeneralInformation";
import InvestButton from "./InvestButton";
import Logo from "./Logo";

import { CurrencyCrypto, ResultsType } from "types";

import "./_ResultsTable.scss";

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
          <GeneralInformation name={currencyCrypto.label} />
          {currencyCrypto.image && <Logo URL={currencyCrypto.image} />}
          <div className="PricesWithButtons">
            {results!.currentPrice && <CurrentPrice currentPrice={results!.currentPrice} />}
            {results!.changes && <Changes changesArray={results!.changes} />}
            <InvestButton />
          </div>
        </div>
      </Grow>
    </CryptoCurrencyContainer>
  );
};

export default ResultsTable;
