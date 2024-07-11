import { useContext, useEffect, useState } from "react";

import { useDelayedCondition } from "hooks";
import useMessage from "hooks/useMessage";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

import { useCryptocompare } from "store";
import { BaseCurrency, CurrencyCrypto } from "types";

export const useFetchCurrentPriceNew = () => {
    const [prices, setPrice] = useState<any>(undefined as any);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const cryptoCompare = useCryptocompare(state => state.cryptoCompare);
    const { currencyBase, currencyCrypto } = useContext(SelectedCurrenciesContext);

    //const shouldRenderLoader = useDelayedCondition(isLoading);// to powinno być jako funkcaj ustaiająca stan isLoading

    useEffect(() => {}, []);

    const showMessage = useMessage();

    console.log(currencyCrypto.value, currencyBase);

    cryptoCompare
        .price(currencyCrypto.value, currencyBase)
        .then((price: any) => {
            setPrice(price);
        })
        .catch((error: any) => {
            // showMessage.error(`Błąd pobierania bieżącego kursu waluty`);
            console.log(error);
            // throw error;
            // setIsLoading(false);
        });

    return prices;
};

export default useFetchCurrentPriceNew;
