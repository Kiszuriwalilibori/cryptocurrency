import { create } from "zustand";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

interface State {
    cryptoCompare: {
        [x: string]: any;
        coinList: any;
        price: any;
        exchangeList: any;
        priceHistorical: any;
    };
}

export const useCryptocompare = create<State>(set => ({
    cryptoCompare: cryptoCompare,
}));
export {};
