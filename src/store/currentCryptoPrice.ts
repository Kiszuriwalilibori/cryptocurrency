import { create } from "zustand";
import createSelectors from "./createSelectors";
import { CryptoPrice } from "types/index";

interface State {
    currentCryptoPrice: CryptoPrice;
    setCurrentCryptoPrice: (arg0: State["currentCryptoPrice"]) => void;
}

const initialCurrentCryptoPrice: State["currentCryptoPrice"] = undefined;
const useCurrentCryptoPriceBase = create<State>(set => ({
    currentCryptoPrice: initialCurrentCryptoPrice,
    setCurrentCryptoPrice: (updatedCurrentCryptoPrice: State["currentCryptoPrice"]) =>
        set({ currentCryptoPrice: updatedCurrentCryptoPrice }),
}));

export const useCurrentCryptoPrice = createSelectors(useCurrentCryptoPriceBase);
