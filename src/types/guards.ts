export function isCryptocurrencyPriceDefined(item: number | undefined): item is number {
    return typeof item === "number";
}
