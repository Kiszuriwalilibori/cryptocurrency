import { CurrentCryptocurrencyPriceAPIResponseItem } from "./types";

export function isOKCurrentCryptocurrencyPriceAPIResponse(
    item: CurrentCryptocurrencyPriceAPIResponseItem | { Response: string; Message: string }
): item is CurrentCryptocurrencyPriceAPIResponseItem {
    return (item as CurrentCryptocurrencyPriceAPIResponseItem) !== undefined;
}

export function isCryptocurrencyPriceDefined(item: number | undefined): item is number {
    return typeof item === "number";
}
