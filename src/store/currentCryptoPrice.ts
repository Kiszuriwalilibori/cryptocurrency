import { create } from "zustand";
import createSelectors from "./createSelectors";
import { CurrentCryptocurrencyPriceAPIResponse } from "types/index";

interface State {
    currentCryptoPrice: CurrentCryptocurrencyPriceAPIResponse;
    setCurrentCryptoPrice: (arg0: State["currentCryptoPrice"]) => void;
}

const initialCurrentCryptoPrice: State["currentCryptoPrice"] = {} as CurrentCryptocurrencyPriceAPIResponse;

const useCurrentCryptoPriceBase = create<State>(set => ({
    currentCryptoPrice: initialCurrentCryptoPrice,
    setCurrentCryptoPrice: (updatedCurrentCryptoPrice: State["currentCryptoPrice"]) =>
        set({ currentCryptoPrice: updatedCurrentCryptoPrice }),
}));

export const useCurrentCryptoPrice = createSelectors(useCurrentCryptoPriceBase);
