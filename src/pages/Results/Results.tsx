import React, { useEffect } from 'react';
import axios from 'axios';
import isToday from './scripts/isToday';
import { SelectedCurrenciesContext } from '../../context/currenciesContext';
import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import ReturnToSelectionButton from './parts/returnToSelectionButton';
import CreateURL from '../../functions/createURL';
import useFetchHistoricalValues from '../../hooks/useFetchHistoricalValues';
import createComparativeArray from '../../functions/createComparativeArray';
import formatCurrentPrice from '../../functions/formatCurrentPrice';
import CryptoCurrencyContainer from './parts/CryptoCurrencyContainer';
import GeneralInfo from './parts/GeneralInfo';
import CryptoCurrencyPricesContainer from './parts/CryptoCurencyPricesContainer';
import CryptoCurrencyCurrentPrice from './parts/CryptoCurrencyCurrentPrice';
import ComparativeTable from './parts/ComparativeTable';
import InvestButton from './parts/InvestButton';
import { Grow } from '@material-ui/core';
import { comparativeArray, historicalPricesType } from '../../types';
import { initial } from '../../config';
import Logo from './parts/Logo';
import Loader from '../../components/Spinner';
interface ResultsType {
    comparativePricesArray: comparativeArray;
    currentPrice: string;
}

interface refType {
    date: Date;
    currentCryptoPrice: number | undefined;
}

/**
 * Presents cryptocurrency price current and historical
 * @returns component
 */
const Results = (): JSX.Element => {
    const ref = React.useRef<refType>({
        date: new Date(),
        currentCryptoPrice: undefined,
    });

    const { enqueueSnackbar } = useSnackbar();
    const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext);
    const intervalMs = initial.intervalMs;
    const currentURL = CreateURL.current(currencyCrypto.value, currencyBase);
    const [results, setResults] = React.useState<ResultsType | null>(null);
    const [historicalCryptoPrice, sethistoricalCryptoPrice] = React.useState<
        historicalPricesType | undefined | null
    >(undefined);

    const { data: currentCryptoData, error: currentCryptoError } = useQuery(
        'currentCrypto',
        async () => {
            if (!isToday(ref.current.date)) {
                const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
                runFetchHistoricalValues(historicalsURLsArray, currencyBase);
            }
            const res = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });
            return res.data;
        },
        {
            refetchInterval: intervalMs,
        },
    );

    const { data: historicalData, runFetchHistoricalValues } = useFetchHistoricalValues();

    useEffect(() => {
        const historicalsURLsArray = CreateURL.historical(currencyCrypto, currencyBase);
        runFetchHistoricalValues(historicalsURLsArray, currencyBase);
    }, []);

    React.useEffect(() => {
        if (currentCryptoData && historicalCryptoPrice) {
            let cryptoPrice = Object.values(currentCryptoData)[0] as number;
            if (cryptoPrice !== ref.current.currentCryptoPrice) {
                ref.current.currentCryptoPrice = cryptoPrice;
                enqueueSnackbar(`Zmiana`, {
                    variant: 'success',
                });

                const comparativeArray = createComparativeArray(cryptoPrice, historicalCryptoPrice);
                const formattedCryptoPrice = formatCurrentPrice(cryptoPrice, currencyBase);
                const result: ResultsType = {
                    comparativePricesArray: comparativeArray,
                    currentPrice: formattedCryptoPrice,
                };

                setResults(result);
            }
        }
    }, [currentCryptoData, historicalCryptoPrice]);

    React.useEffect(() => {
        if (historicalData && historicalCryptoPrice !== historicalData) {
            sethistoricalCryptoPrice(historicalData);
        }
    }, [historicalData]);

    currentCryptoError &&
        enqueueSnackbar(`Podczas pobierania danych bieżących dla ${currencyCrypto.label} wystąpił błąd `, {
            variant: 'error',
        });
    if (!results) return <Loader />;
    return (
        <>
            <ReturnToSelectionButton />
            {(results as ResultsType) && currencyCrypto !== initial.currencyCrypto && (
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
            )}
        </>
    );
};

export default Results;
