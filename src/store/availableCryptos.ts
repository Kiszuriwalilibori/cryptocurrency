import { CurrencyCryptoArray } from "types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

interface State {
    availableCryptos: CurrencyCryptoArray;
    updateAvailableCryptos: (arg0: CurrencyCryptoArray) => void;
}

const useAvailableCryptosBase = create<State>(set => ({
    availableCryptos: [],
    updateAvailableCryptos: (updatedAvailableCryptos: CurrencyCryptoArray) =>
        set({ availableCryptos: updatedAvailableCryptos }),
}));

export const useAvailableCryptos = createSelectors(useAvailableCryptosBase);
