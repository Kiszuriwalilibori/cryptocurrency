import { useState, useEffect, useContext } from "react";

import { HistoricalPrices, NotAvailable } from "types";
import { timestamps } from "functions";
import { useMessage, useBoolean } from "hooks";
import { useCryptocompare, useHistoricalPrices, useLoaderStore } from "store";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";

const useFetchHistoricalPrices = () => {
    const setHistoricalPrices = useHistoricalPrices.use.setHistoricalPrices();
    const [error, setError] = useState(false);
    const [loading, , stopLoading] = useBoolean(true);
    const showMessage = useMessage();
    const setLoader = useLoaderStore.use.setLoader();
    const { currencyBase, currencyCrypto } = useContext(SelectedCurrenciesContext);

    useEffect(() => {
        setLoader(true);
    }, []);

    useEffect(() => {
        if (!loading) {
            setLoader(false);
        }
    }, [loading]);

    const cryptoCompare = useCryptocompare(state => state.cryptoCompare);
    const fetchPrices = async () => {
        const promises: any[] = [];
        const historicalPrices: HistoricalPrices = [];

        timestamps.getTimestamps().forEach(timestamp => {
            promises.push(cryptoCompare.priceHistorical(currencyCrypto.value, [currencyBase], timestamp, {}));
        });

        Promise.allSettled(promises).then(results => {
            results.forEach(result => {
                if (result.status === "rejected") {
                    historicalPrices.push(NotAvailable.na);
                } else {
                    historicalPrices.push(result.value[currencyBase] ? result.value[currencyBase] : NotAvailable.na);
                }
            });

            if (historicalPrices.length) {
                setHistoricalPrices(historicalPrices);
            } else {
                setError(true);
                showMessage.error(`No data fetched at all for historical prices`);
            }
            stopLoading();
        });
    };

    const fetchHistoricalPrices = () => {
        fetchPrices();
    };
    return { error, fetchHistoricalPrices };
};

export default useFetchHistoricalPrices;
