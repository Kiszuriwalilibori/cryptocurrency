import React, { useEffect } from 'react';
import CurrenciesSelectionConfirmButton from './parts/CurrenciesSelectionConfirmButton';
import SearchPageContainer from './parts/SearchPage_Container';
import BaseCurrencySelectForm from './parts/BaseCurrencySelection';
import createOptions from '../../functions/createOptions';
import Loader from '../../components/Spinner';
import { useSnackbar } from 'notistack';
import CryptoCurrencySelectForm from './parts/CryptoCurrencySelection';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { shallowEqual, useDispatch } from 'react-redux';
import { useLazyAxios } from 'use-axios-client';
import notForIE from '../../functions/notForIE';
import { ApiResponseType, baseCurrencyType, currencyCryptoType } from '../../types';
import CryptoCurrencyDecription from '../Selection/parts/CryptoCurrencySelection/cryptoCurrencyDescription';
/**
 * creates a page which enables choice of base currency and cryptocurrency
 * @returns page component
 */
const SelectionOfCurrencyAndCrypto = (): JSX.Element => {
    let [currencyBase, setCurrencyBase] = React.useState<baseCurrencyType | null>(null);
    let [currencyCrypto, setCurrencyCrypto] = React.useState<currencyCryptoType | null>(null);
    const ref = React.useRef({
        fetchingListActive: false,
        listReceived: false,
    });

    const { enqueueSnackbar } = useSnackbar();
    const listOfAllCryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
    const dispatch = useDispatch();
    const [getListOfAllAvailableCryptos, { data: dataFromCryptosAPI, error: listError, loading }] =
        useLazyAxios({
            url: process.env.REACT_APP_ALL_CRYPTOS_URL,
        });
    useEffect(() => {
        listError &&
            enqueueSnackbar(`Błąd pobierania listy kryptowalut`, {
                variant: 'error',
            });
    }, [listError]);

    useEffect(() => {
        notForIE();
    }, []);

    useEffect(() => {
        if (dataFromCryptosAPI && !ref.current.listReceived) {
            const options = createOptions(dataFromCryptosAPI as ApiResponseType);
            dispatch({ type: 'LIST_OF_ALL_CRYPTOS_SET', payload: options });
        }
    }, [dataFromCryptosAPI, ref.current.listReceived]);

    if (loading) return <Loader />;

    if (!listOfAllCryptos && !ref.current.fetchingListActive) {
        ref.current.fetchingListActive = true;
        getListOfAllAvailableCryptos();
    }

    if (listOfAllCryptos && !ref.current.listReceived) {
        ref.current.listReceived = true;
    }

    return (
        <SearchPageContainer>
            <CurrenciesSelectionConfirmButton
                currencyBase={currencyBase as baseCurrencyType}
                currencyCrypto={currencyCrypto as currencyCryptoType}
            />
            <BaseCurrencySelectForm
                currencyBase={currencyBase as baseCurrencyType}
                setCurrencyBase={setCurrencyBase}
            />

            <CryptoCurrencySelectForm
                currencyCrypto={currencyCrypto as currencyCryptoType}
                setCurrencyCrypto={setCurrencyCrypto}
            />
            {currencyCrypto && <CryptoCurrencyDecription currencyCrypto={currencyCrypto} />}
        </SearchPageContainer>
    );
};

export default SelectionOfCurrencyAndCrypto;
