import React from "react";
import useFetchHistoricalPrices from "./useFetchHistoricalPrices";

export const useSetInitialHistoricalPrices = () => {
    const { fetchHistoricalPrices } = useFetchHistoricalPrices();
    React.useEffect(() => {
        fetchHistoricalPrices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useSetInitialHistoricalPrices;
