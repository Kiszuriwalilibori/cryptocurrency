import { timestampsType, optionType } from '../types';

const historicalURL = (coin: string, reference: string, timestamp: timestampsType) =>
    process.env.REACT_APP_HISTORICAL_URL +
    coin +
    '&tsym=' +
    reference +
    '&toTs=' +
    timestamp +
    '&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name';

export const createURL = {
    current: (coin: string, reference: string) =>
        process.env.REACT_APP_CURRENT_URL + coin + '&tsyms=' + reference,
    historical: (timestamps: timestampsType, crypto: optionType, base: string) => {
        const linksArray = [];
        for (let i = 0; i <= timestamps.reducedLength(); i++) {
            linksArray.push(historicalURL(crypto.value, base, timestamps.getValue(i)));
        }
        return linksArray;
    },
};

export default createURL;
