import axios from "axios";

import { createCurrentCryptoPriceURL } from "functions";
import { BaseCurrency, CurrencyCrypto } from "types";

export const fetchCurrentPrice = async (currencyCrypto: CurrencyCrypto, currencyBase: BaseCurrency) => {
    const currentURL = createCurrentCryptoPriceURL(currencyCrypto.value, currencyBase);
    const result = await axios.get(currentURL, { Apikey: process.env.REACT_APP_API_KEY });

    return result.data;
};

export default fetchCurrentPrice;
