import { useEffect, useState } from "react";

import useMessage from "./useMessage";

import { useCryptocompare } from "store";
import { CoinListAPIResponseDataItem, CoinListAPIResponse, CurrencyCryptoArray, Exchanges } from "types";
import getConvertibleCryptos from "functions/getConvertibleCryptos";

function extractData(data: CoinListAPIResponseDataItem): CurrencyCryptoArray {
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
const INITIAL_CONVERTIBLE_CRYPTOS = [] as CurrencyCryptoArray;

export const useFetchAvailableCryptos = () => {
    const [availableCryptos, setAvailableCryptos] = useState<CurrencyCryptoArray>(INITIAL_AVAILABLE_CRYPTOS);
    const [exchanges, setExchanges] = useState<Exchanges>(INITIAL_EXCHANGES);
    const [convertibleCryptos, setConvertibleCryptos] = useState<CurrencyCryptoArray>(INITIAL_CONVERTIBLE_CRYPTOS);
    const [isLoading, setIsLoading] = useState(true);
    const showMessage = useMessage();

    const cryptoCompare = useCryptocompare(state => state.cryptoCompare);

    useEffect(() => {
        cryptoCompare
            .coinList()
            .then((coinList: CoinListAPIResponse) => {
                setAvailableCryptos(extractData(coinList.Data));

                cryptoCompare
                    .exchangeList()
                    .then((exchangeList: Exchanges) => {
                        setExchanges(exchangeList);
                        setIsLoading(false);
                    })
                    .catch(() => {
                        showMessage.error(`Błąd pobierania listy dostępnych par`);
                        setIsLoading(false);
                    });
            })
            .catch(() => {
                showMessage.error(`Błąd pobierania listy kryptowalut`);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (
            availableCryptos &&
            exchanges &&
            availableCryptos !== INITIAL_AVAILABLE_CRYPTOS &&
            exchanges !== INITIAL_EXCHANGES
        ) {
            const convertibleCryptos = getConvertibleCryptos(exchanges, availableCryptos);
            setConvertibleCryptos(convertibleCryptos);
        }
    }, [availableCryptos, exchanges]);
    return { isLoading, convertibleCryptos };
};

export default useFetchAvailableCryptos;
