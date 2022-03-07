import { ApiResponseType, currencyCryptoArrayType } from '../types';
/**
 * Takes response from list of all cryptos API and creates array with desired content
 * @param obj
 * @returns array with code, name and link to logo of all available cryptocurrencies
 */
const createOptions = (obj: ApiResponseType): currencyCryptoArrayType => {
    const { Data: data } = obj;
    const result = [];
    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            result.push({
                value: item,
                label: data[item].CoinName,
                image: data[item].ImageUrl,
                description: data[item].Description,
            });
        }
    }
    return result;
};

export default createOptions;
