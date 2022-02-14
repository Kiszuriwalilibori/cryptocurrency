import { timestampsType, optionType } from '../types';
import timestamps from './timestamps';
class CreateURL {
    /**
     * creates single URL for fetching historical prices
     * @param coin
     * @param reference
     * @param timestamp
     * @returns string being URL
     */

    private static timestamps = timestamps;

    private static historicalURL(coin: string, reference: string, timestamp: timestampsType) {
        return (
            process.env.REACT_APP_HISTORICAL_URL +
            coin +
            '&tsym=' +
            reference +
            '&toTs=' +
            timestamp +
            '&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name'
        );
    }
    /**
     * creates URL which enables fetching current cryptocurrency price
     * @param crypto cryptocurrency
     * @param base basecurrency
     * @returns string being URL
     */
    static current(crypto: string, base: string) {
        return process.env.REACT_APP_CURRENT_URL + crypto + '&tsyms=' + base;
    }
    /**
     * creates array of URLs for fetching historical prices
     * @param timestamps timestamps
     * @param base base currency
     * @param crypto cryptocurrency
     * @returns string being URL
     */
    static historical(crypto: optionType, base: string) {
        const linksArray = [];
        for (let i = 0; i <= this.timestamps.reducedLength(); i++) {
            linksArray.push(this.historicalURL(crypto.value, base, this.timestamps.getValue(i)));
        }

        return linksArray;
    }
}

export default CreateURL;
