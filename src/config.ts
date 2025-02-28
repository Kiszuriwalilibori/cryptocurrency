import { CurrencyCrypto } from "types";

export const UPDATE_INTERVAL_MILISECONDS = 3000;

export const INITIAL_CURRENCY_CRYPTO: CurrencyCrypto = {
    value: "",
    label: "",
    imageURL: "",
    description: "",
};

export const INITIAL_CURRENCY_BASE = "";

export const BASE_URL = new Map();
BASE_URL.set("current", "https://min-api.cryptocompare.com/data/price?fsym=");
BASE_URL.set("historical", "https://min-api.cryptocompare.com/data/dayAvg?fsym=");
BASE_URL.set("all", "https://min-api.cryptocompare.com/data/all/coinlist");
BASE_URL.set("general", "https://www.cryptocompare.com");
BASE_URL.set("socket", `wss://data-streamer.cryptocompare.com/?api_key={${process.env.REACT_APP_API_KEY}}`);

export const message = {
    action: "SUB_ADD",
    groups: ["VALUE", "CURRENT_HOUR"],
    type: "1101",
    subscriptions: [{ market: "cadli", instrument: "" }],
};
