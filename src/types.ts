export type GenericStringObject = { [key: string]: string };

export interface currencyCryptoType {
    value: string;
    label: string;
    image: string;
    description: string;
}
export type currencyCryptoArrayType = currencyCryptoType[];

export interface optionType {
    value: string;
    label: string;
    image: string;
    description: string;
}
export type optionsArrayType = optionType[];

export interface ApiResponseDataType {
    [key: string]: { CoinName: string; ImageUrl: string; Description: string };
}
export interface ApiResponseType {
    Data: ApiResponseDataType;
}

type historicalPrice = { [key: string]: number | string };

export type historicalPricesArrayType = historicalPrice[];

export type timestampIDs = '1D' | '1M' | '5M' | '12M' | '30M' | 'YTD';

type timestampContentType = [timestampIDs, Function][];

export interface timestampsType {
    content: timestampContentType;
    reducedLength: Function;
    getValue: Function;
    getTimestampID: Function;
    getContent: Function;
    getCodes: Function;
}

export type NotAvailable = 'n/a';

export type baseCurrencyType = 'PLN' | 'USD' | 'EUR' | '';

export type currentCryptoDataType = { [K in baseCurrencyType]: number };

export type comparativeArrayElement = { [K in timestampIDs]: NotAvailable | string };

export type comparativeArray = comparativeArrayElement[];

export type historicalPricesType = (number | NotAvailable)[];
