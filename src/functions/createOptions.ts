import { optionsArrayType, ApiResponseType } from '../types';

const createOptions = (obj: ApiResponseType): optionsArrayType => {
    const { Data: data } = obj;
    const result = [];
    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            result.push({ value: item, label: data[item].CoinName, image: data[item].ImageUrl });
        }
    }
    return result;
};

export default createOptions;
