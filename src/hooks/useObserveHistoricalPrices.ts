import { useContext, useEffect } from "react";

import { UPDATE_INTERVAL_MILISECONDS } from "config";
import { hasDateChanged } from "functions";
import { useFetchHistoricalPrices } from "hooks";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

export const useObserveHistoricalPrices = () => {
    const { currencyBase, currencyCrypto } = useContext(SelectedCurrenciesContext);
    const { fetchHistoricalPrices } = useFetchHistoricalPrices();

    useEffect(() => {
        const interval = setInterval(() => {
            if (hasDateChanged(UPDATE_INTERVAL_MILISECONDS)) {
                fetchHistoricalPrices();
            }
        });
        return () => clearInterval(interval);
    }, [currencyBase, currencyCrypto]);
};

export default useObserveHistoricalPrices;
