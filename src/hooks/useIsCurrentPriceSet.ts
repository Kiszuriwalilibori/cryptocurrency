import { useCurrentCryptoPrice, initialCurrentCryptoPrice } from "store/currentCryptoPrice";

export const useIsCurrentPriceSet = () => {
    const currentPrice = useCurrentCryptoPrice.use.currentCryptoPrice();
    return currentPrice !== initialCurrentCryptoPrice;
};

export default useIsCurrentPriceSet;
