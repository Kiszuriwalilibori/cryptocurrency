import React, { useEffect } from 'react';
import axios from 'axios';
import isToday from './scripts/isToday';
import { SelectedCurrenciesContext } from '../../context/currenciesContext';
import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import ReturnToSelectionButton from './parts/returnToSelectionButton';
import createURL from '../../functions/createURL';
import timestamps from '../../functions/timestamps';
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

interface ResultsType {
    comparativePricesArray: comparativeArray;
    currentPrice: string;
}

interface refType {
    date: Date;
    historicalCryptoPrice: historicalPricesType | undefined | null;
    currentCryptoPrice: number | undefined;
}
const Results = (): JSX.Element => {
    const ref = React.useRef<refType>({
        date: new Date(),
        historicalCryptoPrice: undefined,
        currentCryptoPrice: undefined,
    });

    const { enqueueSnackbar } = useSnackbar();

    const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext);
    const intervalMs = initial.intervalMs;
    const currentURL = createURL.current(currencyCrypto.value, currencyBase);
    const [results, setResults] = React.useState<ResultsType | null>(null);

    const cryptoLogoUrl = currencyCrypto.image
        ? process.env.REACT_APP_CRYPTOS_GENERAL + currencyCrypto.image + '?width=30'
        : '';

    const { data: currentCryptoData, error: currentCryptoError } = useQuery(
        'currentCrypto',
        async () => {
            if (!isToday(ref.current.date)) {
                const historicalsURLsArray = createURL.historical(timestamps, currencyCrypto, currencyBase);
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
        const historicalsURLsArray = createURL.historical(timestamps, currencyCrypto, currencyBase);
        runFetchHistoricalValues(historicalsURLsArray, currencyBase);
    }, []);
    // console.log(
    //     currentCryptoData,
    //     ref.current.historicalCryptoPrice,
    //     historicalData,
    //     'ccd,ref.histo, historicaldata',
    // );
    console.log('results renders');
    React.useEffect(() => {
        if (currentCryptoData && ref.current.historicalCryptoPrice) {
            let cryptoPrice = Object.values(currentCryptoData)[0] as number;
            if (cryptoPrice !== ref.current.currentCryptoPrice) {
                ref.current.currentCryptoPrice = cryptoPrice;
                enqueueSnackbar(`Zmiana`, {
                    variant: 'success',
                });

                const comparativeArray = createComparativeArray(
                    cryptoPrice,
                    ref.current.historicalCryptoPrice,
                );
                const formattedCryptoPrice = formatCurrentPrice(cryptoPrice, currencyBase);
                const result: ResultsType = {
                    comparativePricesArray: comparativeArray,
                    currentPrice: formattedCryptoPrice,
                };

                setResults(result);
            }
        }
    });

    React.useEffect(() => {
        if (historicalData) {
            // console.log('set historical');
            ref.current.historicalCryptoPrice = historicalData;
        }
    }, [historicalData]);

    currentCryptoError &&
        enqueueSnackbar(`Podczas pobierania danych bieżących dla ${currencyCrypto.label} wystąpił błąd `, {
            variant: 'error',
        });

    return (
        <>
            <ReturnToSelectionButton />
            {(results as ResultsType) && (
                <CryptoCurrencyContainer>
                    <Grow in={true} timeout={1000}>
                        <div className="DataContainer">
                            <GeneralInfo name={currencyCrypto.label} />
                            {cryptoLogoUrl && <Logo src={cryptoLogoUrl} />}
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
