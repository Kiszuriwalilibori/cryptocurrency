import { create } from "zustand";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

interface State {
    cryptoCompare: { coinList: any; price: any; exchangeList: any };
}

export const useCryptocompare = create<State>(set => ({
    cryptoCompare: cryptoCompare,
}));
export {};
