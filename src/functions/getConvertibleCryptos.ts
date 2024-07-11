import { CurrencyCryptoArray, Exchanges } from "types/index";

type FlattenedExchangesItem = [string, any];
type FlattenedExchanges = FlattenedExchangesItem[];

export const getConvertibleCryptos = (exchanges: Exchanges, availableCryptos: CurrencyCryptoArray) => {
    const nonEmptyExchanges = Object.values(exchanges)
        .filter(item => {
            return Object.keys(item).length;
        })
        .map(item => {
            return Object.entries(item);
        });

    const flattenedExchanges = [] as FlattenedExchanges;

    nonEmptyExchanges.forEach(item => {
        flattenedExchanges.push(...item);
    });

    const uniqueAvailableExchanges = Array.from(
        new Set(
            flattenedExchanges.map((item: [string, any]) => {
                return item[0];
            })
        )
    );

    const convertibleCryptos = availableCryptos.filter(crypto => {
        return uniqueAvailableExchanges.includes(crypto.value);
    });

    return convertibleCryptos;
};

export default getConvertibleCryptos;
