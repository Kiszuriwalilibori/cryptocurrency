import { AvailableCryptocurrencies } from "types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

interface State {
    convertibleCryptos: AvailableCryptocurrencies;
    updateConvertibleCryptos: (arg0: AvailableCryptocurrencies) => void;
}

const useConvertibleCryptosBase = create<State>(set => ({
    convertibleCryptos: [],
    updateConvertibleCryptos: (updatedConvertibleCryptos: AvailableCryptocurrencies) =>
        set({ convertibleCryptos: updatedConvertibleCryptos }),
}));

export const useConvertibleCryptos = createSelectors(useConvertibleCryptosBase);
