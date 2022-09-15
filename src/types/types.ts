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

export type NotAvailable = "n/a";

export type BaseCurrency = "PLN" | "USD" | "EUR" | "";

export type ComparativeArrayItem = { [K in TimestampIDs]: NotAvailable | string };

export type ComparativeArray = ComparativeArrayItem[];

export type HistoricalPrices = (number | NotAvailable)[];
