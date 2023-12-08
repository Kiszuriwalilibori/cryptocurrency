import { Grow } from "@mui/material";

import { Changes, CryptoCurrencyCurrentPrice, GeneralInformation, InvestButton, Logo } from "../components";
import { CryptoContainer } from "./styles";
import { CurrencyCrypto, ResultsType } from "types";

import "../styles/_ResultsTable.scss";

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
        <CryptoContainer>
            <Grow in={true} timeout={1000}>
                <section className="DataContainer" aria-label="query data">
                    <GeneralInformation currencyCryptoName={currencyCrypto.label} />
                    {currencyCrypto.imageURL && <Logo imageURL={currencyCrypto.imageURL} />}
                    <div className="PricesWithButtons">
                        {results!.currentPrice && <CryptoCurrencyCurrentPrice currentPrice={results!.currentPrice} />}
                        {results!.changes && <Changes changesArray={results!.changes} />}
                        <InvestButton />
                    </div>
                </section>
            </Grow>
        </CryptoContainer>
    );
};

export default ResultsTable;
