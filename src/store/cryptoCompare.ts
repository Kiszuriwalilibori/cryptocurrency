import { create } from "zustand";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

interface State {
    cryptoCompare: {
        [x: string]: any;
        coinList: () => Promise<any>;
        price: (fsym: any, tsyms: any, options: any) => Promise<any>;
        exchangeList: () => Promise<any>;
        priceHistorical: (fsym: any, tsyms: any, time: any, options: any) => Promise<any>;
    };
}

export const useCryptocompare = create<State>(set => ({
    cryptoCompare: cryptoCompare,
}));
export {};
