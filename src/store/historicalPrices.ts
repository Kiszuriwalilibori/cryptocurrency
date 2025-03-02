import { create } from "zustand";
import createSelectors from "./createSelectors";
import { HistoricalPrices } from "types";

interface State {
    historicalPrices: HistoricalPrices;
    setHistoricalPrices: (arg0: State["historicalPrices"]) => void;
}
const initialHistoricalPrices: State["historicalPrices"] = [];

const useHistoricalPricesBase = create<State>(set => ({
    historicalPrices: initialHistoricalPrices,
    setHistoricalPrices: (updatedHistoricalPrices: State["historicalPrices"]) =>
        set({ historicalPrices: updatedHistoricalPrices }),
}));

export const useHistoricalPrices = createSelectors(useHistoricalPricesBase);
