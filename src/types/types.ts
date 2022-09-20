export interface CurrencyCrypto {
  value: string;
  label: string;
  image: string;
  description: string;
}
export type CurrencyCryptoArray = CurrencyCrypto[];
interface ApiResponseData {
  [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface ApiResponse {
  Data: ApiResponseData;
}

export type TimestampIDs = "1D" | "1M" | "5M" | "12M" | "30M" | "YTD";

export interface Timestamps {
  content: [TimestampIDs, Function][];
  reducedLength: Function;
  getValue: Function;
  getTimestampID: Function;
  getContent: Function;
  getCodes: Function;
}
export enum NotAv {
  NotAvailable = "n/a",
}
export type NotAvailable = "n/a"; /// bedzie do wywalenia

export type BaseCurrency = "PLN" | "USD" | "EUR" | "";

export type ChangesArrayItem = { [K in TimestampIDs]: NotAv | string };

export type ChangesArray = ChangesArrayItem[];

export type HistoricalPrices = (number | NotAv)[];

export interface ResultsType {
  changes: ChangesArray;
  currentPrice: { [key: string]: string };
}
