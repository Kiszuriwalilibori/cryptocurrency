import { CoinListAPIResponseItem } from "types";
/**
 * Takes response from list of all cryptos API and creates array with desired content
 * @param obj
 * @returns array with code, name and link to logo of all available cryptocurrencies
 */
const createOptions = (obj: { data: { Data: CoinListAPIResponseItem } }) => {
    const data = obj.data.Data;

    const options = [];

    for (let item in data) {
        if (data.hasOwnProperty(item)) {
            options.push({
                value: item,
                label: data[item].CoinName,
                image: data[item].ImageUrl,
                description: data[item].Description,
            });
        }
    }

    return options;
};

export default createOptions;
