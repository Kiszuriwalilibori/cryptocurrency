import React, { useEffect } from 'react';
import createOptions from '../../functions/createOptions';
import FetchingStatusIndicator from './parts/FetchingStatusIndicator';
import { useSnackbar } from 'notistack';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { shallowEqual, useDispatch } from 'react-redux';
import { useLazyAxios } from 'use-axios-client';
import { ApiResponseType } from '../../types';
import SelectionSection from './parts/SelectionSection';

/**
 * creates a page with logic for fetching lit of available cryptos
 * @returns page component
 */
const SelectionOfCurrencyAndCrypto = (): JSX.Element => {
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
        if (dataFromCryptosAPI && !ref.current.listReceived) {
            const options = createOptions(dataFromCryptosAPI as ApiResponseType);
            dispatch({ type: 'LIST_OF_ALL_CRYPTOS_SET', payload: options });
        }
    }, [dataFromCryptosAPI, ref.current.listReceived]);

    if (!listOfAllCryptos && !ref.current.fetchingListActive) {
        ref.current.fetchingListActive = true;
        getListOfAllAvailableCryptos();
    }

    if (listOfAllCryptos && !ref.current.listReceived) {
        ref.current.listReceived = true;
    }

    return (
        <>
            <FetchingStatusIndicator loading={loading} />
            <SelectionSection />
        </>
    );
};

export default SelectionOfCurrencyAndCrypto;
