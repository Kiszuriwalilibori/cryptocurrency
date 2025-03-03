import { create } from "zustand";
import createSelectors from "./createSelectors";
import { HistoricalPrices } from "types";

interface State {
    historicalPrices: HistoricalPrices;
    setHistoricalPrices: (arg0: State["historicalPrices"]) => void;
    resetHistoricalPrices: () => void;
}
const initialHistoricalPrices: State["historicalPrices"] = [];

const useHistoricalPricesBase = create<State>(set => ({
    historicalPrices: initialHistoricalPrices,
    setHistoricalPrices: (updatedHistoricalPrices: State["historicalPrices"]) =>
        set({ historicalPrices: updatedHistoricalPrices }),
    resetHistoricalPrices: () => set({ historicalPrices: initialHistoricalPrices }),
}));

export const useHistoricalPrices = createSelectors(useHistoricalPricesBase);
