import React, { useEffect } from 'react';
import CurrenciesSelectionConfirmButton from '../../components/Button';
import SearchPageContainer from '../../components/SearchPage_Container';
import BaseCurrencySelectForm from './parts/BaseCurrencyChoice';
import createOptions from '../../functions/createOptions';
import Loader from '../../components/Loader';
import { useSnackbar } from 'notistack';
import CryptoCurrencySelectForm from './parts/CryptoCurrencyChoice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { shallowEqual, useDispatch } from 'react-redux';
import { useLazyAxios } from 'use-axios-client';
import notForIE from '../../functions/notForIE';
import { ApiResponseType, baseCurrencyType, currencyCryptoType } from '../../types';

const initialCurrencyCrypto = { label: '', value: '' };

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
    const [getData, { data, error: listError, loading }] = useLazyAxios({
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

    if (loading) return <Loader />;

    if (data && !ref.current.listReceived) {
        const options = createOptions(data as ApiResponseType);
        dispatch({ type: 'LIST_OF_ALL_CRYPTOS_SET', payload: options });
    }

    if (!listOfAllCryptos && !ref.current.fetchingListActive) {
        ref.current.fetchingListActive = true;
        getData();
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
                selectedCrypto={currencyCrypto as currencyCryptoType}
                sendSelectedCrypto={setCurrencyCrypto}
            />
        </SearchPageContainer>
    );
};

export default SelectionOfCurrencyAndCrypto;
