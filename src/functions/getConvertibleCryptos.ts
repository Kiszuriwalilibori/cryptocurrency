import { CurrencyCryptoArray, Exchanges } from "types/index";

type x = [string, string[]];

type FlattenedExchangesItem = [string, any];
type FlattenedExchanges = FlattenedExchangesItem[];

// export interface Exchanges {
//     [key: string]: x;
// }

// interface y {
//     [key: string]: { [key: string]: string[] };
// }
export const getConvertibleCryptos = (exchanges: Exchanges /*y*/, availableCryptos: CurrencyCryptoArray) => {
    console.log("exch", exchanges);
    const nonEmptyExchanges = Object.values(exchanges)

        .filter(item => {
            return Object.keys(item).length;
        })
        .map(item => {
            return Object.entries(item);
        });
    console.log("ne", nonEmptyExchanges);
    const flattenedExchanges = [] as /*x[];*/ FlattenedExchanges;

    nonEmptyExchanges.forEach(item => {
        flattenedExchanges.push(...item);
    });
    console.log("flatt", flattenedExchanges);
    const uniqueAvailableExchanges = Array.from(
        new Set(
            flattenedExchanges.map((item: x) => {
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
