import React from "react";

export const useSetInitialHistoricalPrices = (fetchHistoricalPrices: () => void) => {
    React.useEffect(() => {
        fetchHistoricalPrices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useSetInitialHistoricalPrices;
