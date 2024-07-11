import React from "react";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { BaseCurrency, CurrencyCrypto } from "types";

export const useInitializeHistoricalPrices = (
    fetchHistoricalPrices: (currencyCrypto: CurrencyCrypto, baseCurrency: BaseCurrency) => void
) => {
    const { currencyBase, currencyCrypto } = React.useContext(SelectedCurrenciesContext);

    React.useEffect(() => {
        fetchHistoricalPrices(currencyCrypto, currencyBase);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useInitializeHistoricalPrices;
