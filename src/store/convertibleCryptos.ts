import { Convertibles } from "types";
import { create } from "zustand";
import createSelectors from "./createSelectors";

interface State {
    convertibles: Convertibles;
    setConvertibles: (arg0: Convertibles) => void;
}

const useConvertibleCryptosBase = create<State>(set => ({
    convertibles: [],
    setConvertibles: (currentConvertibles: Convertibles) => set({ convertibles: currentConvertibles }),
}));

export const useConvertibleCryptos = createSelectors(useConvertibleCryptosBase);
