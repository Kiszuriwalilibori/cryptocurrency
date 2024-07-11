export type { ShowMessage } from "hooks/useMessage";

export interface CurrencyCrypto {
    value: string;
    label: string;
    imageURL: string;
    description: string;
}
export type CurrencyCryptoArray = CurrencyCrypto[];

export interface CoinListAPIResponseDataItem {
    [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface CoinListAPIResponse {
    [key: string]: CoinListAPIResponseDataItem;
}
export interface CoinListAPIResponseData {
    data: { Data: CoinListAPIResponseDataItem };
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

export type CurrentCryptocurrencyPriceAPIResponseItem = {
    [key in BaseCurrency]: number;
};

export type CurrentCryptocurrencyPriceAPIResponse =
    | CurrentCryptocurrencyPriceAPIResponseItem
    | { Response: string; Message: string };

export type ChangesArrayItem = { [K in TimestampIDs]: NotAvailable | string };

export type ChangesArray = ChangesArrayItem[];

export type HistoricalPrices = (number | NotAvailable.na)[];

export interface ResultsType {
    changes: ChangesArray;
    currentPrice: { [key: string]: string };
}

export type CryptoPrice = number | undefined;

export interface UseConfirmChoice {
    currencyBase: BaseCurrency;
    currencyCrypto: CurrencyCrypto;
}

export interface Exchanges {
    [key: string]: string[];
}

export interface ExchangesObject {
    Cryptsy: Exchanges;
}
