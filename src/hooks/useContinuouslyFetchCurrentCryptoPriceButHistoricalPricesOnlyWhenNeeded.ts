import { useContext } from "react";
import { useQuery } from "react-query";

import { UPDATE_INTERVAL_MILISECONDS } from "config";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { fetchCurrentPrice, hasDateChanged } from "functions";
import { useFetchHistoricalPrices, useMessage } from "hooks";

export const useContinuouslyFetchCurrentCryptoPriceButHistoricalPricesOnlyWhenNeeded = () => {
    const showMessage = useMessage();
    const { currencyBase, currencyCrypto } = useContext(SelectedCurrenciesContext);
    const { fetchHistoricalPrices } = useFetchHistoricalPrices();

    const { data: cryptoCurrencyPriceAPIResponse, error } = useQuery(
        "currentCrypto",
        async () => {
            if (hasDateChanged(UPDATE_INTERVAL_MILISECONDS)) {
                fetchHistoricalPrices(currencyCrypto, currencyBase);
            }
            const result = await fetchCurrentPrice(currencyCrypto, currencyBase);

            return result;
        },
        {
            refetchInterval: UPDATE_INTERVAL_MILISECONDS,
        }
    );
    error && showMessage.error(`Podczas pobierania danych bieżących dla ${currencyCrypto.label} wystąpił błąd `);

    return { cryptoCurrencyPriceAPIResponse };
};

export default useContinuouslyFetchCurrentCryptoPriceButHistoricalPricesOnlyWhenNeeded;
