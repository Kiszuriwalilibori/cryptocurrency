import axios from "axios";

import { createCurrentCryptoPriceURL } from "functions";
import { CurrencyBase, CurrencyCrypto } from "types";

export const fetchCurrentPrice = async (currencyCrypto: CurrencyCrypto, currencyBase: CurrencyBase) => {
    const currentURL = createCurrentCryptoPriceURL(currencyCrypto.value, currencyBase);
    const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });

    return result.data;
};

export default fetchCurrentPrice;
