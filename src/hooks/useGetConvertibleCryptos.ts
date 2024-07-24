import { useEffect, useRef } from "react";

import getConvertibleCryptos from "functions/getConvertibleCryptos";

import { useConvertibleCryptos, useCryptocompare, useLoaderStore } from "store";
import { CoinListAPIResponseDataItem, CoinListAPIResponse, CurrencyCryptoArray, Exchanges } from "types";
import { useBoolean, useDelayedCondition, useMessage } from "hooks";

function extractCryptosData(data: CoinListAPIResponseDataItem): CurrencyCryptoArray {
    const result = [];
    for (let item in data) {
        if (data.hasOwnProperty(item)) {
            result.push({
                value: item,
                label: data[item].CoinName,
                imageURL: data[item].ImageUrl,
                description: data[item].Description,
            });
        }
    }

    return result;
}
const INITIAL_AVAILABLE_CRYPTOS = [] as CurrencyCryptoArray;
const INITIAL_EXCHANGES = {} as Exchanges;

export const useGetConvertibleCryptos = () => {
    const setConvertibleCryptos = useConvertibleCryptos.use.updateConvertibleCryptos();
    const setLoader = useLoaderStore.use.setLoader();
    const cryptos = useRef<CurrencyCryptoArray>(INITIAL_AVAILABLE_CRYPTOS);
    const exchanges = useRef<Exchanges>(INITIAL_EXCHANGES);
    const [isLoading, , setIsloadingFalse] = useBoolean(true);
    const showMessage = useMessage();
    const isLoaderActive = useDelayedCondition(isLoading);
    const cryptoCompare = useCryptocompare(state => state.cryptoCompare);

    useEffect(() => {
        const promises = Promise.all([cryptoCompare.coinList(), cryptoCompare.exchangeList()]);
        promises
            .then((values: [CoinListAPIResponse, Exchanges]) => {
                cryptos.current = extractCryptosData(values[0].Data);
                exchanges.current = values[1];
                setIsloadingFalse();
            })
            .catch(() => {
                showMessage.error(`Błąd pobierania listy dostępnych kryptowalut`);
                setIsloadingFalse();
            });
    }, []);

    useEffect(() => {
        if (
            cryptos.current &&
            exchanges.current &&
            cryptos.current !== INITIAL_AVAILABLE_CRYPTOS &&
            exchanges.current !== INITIAL_EXCHANGES
        ) {
            const convertibleCryptos = getConvertibleCryptos(exchanges.current, cryptos.current);
            setConvertibleCryptos(convertibleCryptos);
        }
    }, [cryptos.current, exchanges.current, getConvertibleCryptos, setConvertibleCryptos]);

    useEffect(() => {
        setLoader(isLoaderActive);
    }, [isLoaderActive, setLoader]);
};

export default useGetConvertibleCryptos;
