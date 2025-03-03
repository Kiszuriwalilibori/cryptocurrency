import { useEffect } from "react";
import { useCurrentCryptoPrice, useHistoricalPrices } from "store";

export const useResetPrices = () => {
    const resetCurrent = useCurrentCryptoPrice.use.resetCurrentCryptoPrice();
    const resetHistoricals = useHistoricalPrices.use.resetHistoricalPrices();

    useEffect(() => {
        resetCurrent();
        resetHistoricals();
    }, []);
};

export default useResetPrices;
