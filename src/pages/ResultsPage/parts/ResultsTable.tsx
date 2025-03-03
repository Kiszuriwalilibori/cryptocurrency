import "../styles/_ResultsTable.scss";

import React from "react";

import { Grow } from "@mui/material";

import { Changes, CryptoCurrencyCurrentPrice, GeneralInformation, InvestButton, Logo } from ".";
import { CryptoContainer } from "./styles";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

/**
 * creates array with all provided informations about crypto
 * @param props
 * @returns
 */
const ResultsTable = () => {
    const {
        currencyCrypto: { label, imageURL },
    } = React.useContext(SelectedCurrenciesContext);

    return (
        <CryptoContainer>
            <Grow in={true} timeout={1000}>
                <section className="DataContainer" aria-label="query data">
                    <GeneralInformation currencyCryptoName={label} />
                    {imageURL && <Logo imageURL={imageURL} />}
                    <div className="PricesWithButtons">
                        <CryptoCurrencyCurrentPrice />
                        {<Changes />}
                        <InvestButton />
                    </div>
                </section>
            </Grow>
        </CryptoContainer>
    );
};

export default ResultsTable;
