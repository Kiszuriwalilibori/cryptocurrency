import * as React from 'react';
import { Grow } from '@material-ui/core';
import ComparativeTable from './ComparativeTable';
import CryptoCurrencyPricesContainer from './CryptoCurencyPricesContainer';
import CryptoCurrencyContainer from './CryptoCurrencyContainer';
import CryptoCurrencyCurrentPrice from './CryptoCurrencyCurrentPrice';
import GeneralInfo from './GeneralInfo';
import InvestButton from './InvestButton';
import Logo from './Logo';
import { currencyCryptoType } from '../../../types';
import { ResultsType } from '../Results';

interface propTypes {
    currencyCrypto: currencyCryptoType;
    results: ResultsType;
}
/**
 * creates array with all provided informations about crypto
 * @param props
 * @returns
 */
const ResultsTabelarised = (props: propTypes) => {
    const { currencyCrypto, results } = props;
    return (
        <CryptoCurrencyContainer>
            <Grow in={true} timeout={1000}>
                <div className="DataContainer">
                    <GeneralInfo name={currencyCrypto.label} />
                    {currencyCrypto.image && <Logo URL={currencyCrypto.image} />}
                    <CryptoCurrencyPricesContainer>
                        <CryptoCurrencyCurrentPrice currentPrice={results!.currentPrice} />
                        <ComparativeTable historicals={results!.comparativePricesArray} />
                        <InvestButton />
                    </CryptoCurrencyPricesContainer>
                </div>
            </Grow>
        </CryptoCurrencyContainer>
    );
};

export default ResultsTabelarised;
