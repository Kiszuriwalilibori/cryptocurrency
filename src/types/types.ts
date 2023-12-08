export interface CurrencyCrypto {
    value: string;
    label: string;
    imageURL: string;
    description: string;
}
export type CurrencyCryptoArray = CurrencyCrypto[];
interface ApiResponseData {
    [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface ApiResponse {
    data: { Data: ApiResponseData };
}

export type TimestampIDs = "1D" | "1M" | "5M" | "12M" | "30M" | "YTD";

export interface Timestamps {
    content: [TimestampIDs, () => number][];
    reducedLength: () => number;
    getValue: (i: number) => number;
    getTimestampID: (i: number) => TimestampIDs;
    getContent: () => [TimestampIDs, () => number][];
    getCodes: () => TimestampIDs[];
}
export enum NotAvailable {
    na = "n/a",
}

export type BaseCurrency = "PLN" | "USD" | "EUR" | "";

export type ChangesArrayItem = { [K in TimestampIDs]: NotAvailable | string };

export type ChangesArray = ChangesArrayItem[];

export type HistoricalPrices = (number | NotAvailable.na)[];

export interface ResultsType {
    changes: ChangesArray;
    currentPrice: { [key: string]: string };
}

export type CryptoPrice = number | string;

export interface UseConfirmChoice {
    currencyBase: BaseCurrency;
    currencyCrypto: CurrencyCrypto;
}
