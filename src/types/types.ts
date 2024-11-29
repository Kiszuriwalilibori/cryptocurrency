export type { ShowMessage } from "hooks/useMessage";
export enum NotAvailable {
    na = "n/a",
}

export type CurrencyBase = "PLN" | "USD" | "EUR" | "";
export interface CurrencyCrypto {
    value: string;
    label: string;
    imageURL: string;
    description: string;
}
export type AvailableCryptocurrencies = CurrencyCrypto[];

export type CryptoPrice = number | undefined;

/* coin list response - related*/
export interface CoinListAPIResponseDataItem {
    [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface CoinListAPIResponse {
    [key: string]: CoinListAPIResponseDataItem;
}
export interface CoinListAPIResponseData {
    data: { Data: CoinListAPIResponseDataItem };
}
/* timestamp-related*/
export type TimestampIDs = "1D" | "1M" | "5M" | "12M" | "30M" | "YTD";
interface TimestampsItem {
    ID: TimestampIDs;
    timestamp: Date;
}
export interface Timestamps {
    items: TimestampsItem[];
    reducedLength: () => number;
    getTimestamps: () => TimestampsItem["timestamp"][];
    getIDs: () => TimestampsItem["ID"][];
}

/* current price api response -related*/
export type CurrentCryptocurrencyPriceAPIResponseItem = {
    [key in CurrencyBase]: number;
};

export type CurrentCryptocurrencyPriceAPIResponse =
    | CurrentCryptocurrencyPriceAPIResponseItem
    | { Response: string; Message: string };

/* changes array */
export type ChangesArrayItem = { [K in TimestampIDs]: NotAvailable | string };

export type ChangesArray = ChangesArrayItem[];

export type HistoricalPrices = (number | NotAvailable.na)[];

export interface AggregatedResults {
    changes: ChangesArray;
    currentPrice: { [key: string]: string };
}

export interface Selection {
    currencyBase: CurrencyBase;
    currencyCrypto: CurrencyCrypto;
}

export interface Exchanges {
    [key: string]: { [key: string]: string[] };
}
