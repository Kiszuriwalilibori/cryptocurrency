import { CurrencyCryptoArray } from "types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

interface State {
    convertibleCryptos: CurrencyCryptoArray;
    updateConvertibleCryptos: (arg0: CurrencyCryptoArray) => void;
}

const useConvertibleCryptosBase = create<State>(set => ({
    convertibleCryptos: [],
    updateConvertibleCryptos: (updatedConvertibleCryptos: CurrencyCryptoArray) =>
        set({ convertibleCryptos: updatedConvertibleCryptos }),
}));

export const useConvertibleCryptos = createSelectors(useConvertibleCryptosBase);
