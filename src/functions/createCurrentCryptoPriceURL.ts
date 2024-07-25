import { BASE_URL } from "../config";

/**
 * creates URL which enables fetching current cryptocurrency price
 * @param crypto cryptocurrency
 * @param base basecurrency
 * @returns string being URL
 */
function createCurrentCryptoPriceURL(crypto: string, base: string) {
    return BASE_URL.get("current") + crypto + "&tsyms=" + base + "&tryConversion=true";
}

export default createCurrentCryptoPriceURL;
