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
export type Convertibles = CurrencyCrypto[];

export type CryptoPrice = number | undefined;

/* coin list response - related*/
export interface CoinListAPIResponseItem {
    [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface CoinListAPIResponse {
    [key: string]: CoinListAPIResponseItem;
}

/* timestamp-related*/
export type TimestampID = "1D" | "1M" | "5M" | "12M" | "30M" | "YTD";
interface Timestamp {
    ID: TimestampID;
    timestamp: Date;
}
export interface Timestamps {
    items: Timestamp[];
    reducedLength: () => number;
    getTimestamps: () => Timestamp["timestamp"][];
    getIDs: () => Timestamp["ID"][];
}

export type Change = { [K in TimestampID]: NotAvailable | string };

export type Changes = Change[];

export type HistoricalPrices = (number | NotAvailable.na)[];

export interface Selection {
    currencyBase: CurrencyBase;
    currencyCrypto: CurrencyCrypto;
}

export interface Exchanges {
    [key: string]: { [key: string]: string[] };
}

export interface LastJsonMessage {
    INSTRUMENT?: string;
    MARKET?: string;
    TYPE?: string;
    VALUE?: number;
}
