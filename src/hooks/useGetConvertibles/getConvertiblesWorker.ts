/* eslint-disable no-restricted-globals */

import { getConvertibleCryptos } from "functions/getConvertibleCryptos";
import { isEmpty } from "lodash";
import { CoinListAPIResponseDataItem, CurrencyCryptoArray, Exchanges, CurrencyCrypto } from "types";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

function extractCryptosData(data: CoinListAPIResponseDataItem): CurrencyCryptoArray {
    const result = [];
    for (let item in data) {
        if (data.hasOwnProperty(item)) {
            result.push({
                value: item,
                label: data[item].CoinName,
                imageURL: data[item].ImageUrl,
                description: data[item].Description,
            });
        }
    }

    return result;
}

self.onmessage = function (event) {
    const outcome: { errors?: string[]; convertibles?: CurrencyCrypto[] } = {};
    let exchanges = {} as Exchanges;
    let cryptos = [] as CurrencyCryptoArray;
    Promise.allSettled([cryptoCompare.coinList(), cryptoCompare.exchangeList()]).then(results => {
        if (results && results.length) {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    if (result.value.error) {
                        outcome.errors?.push(result.value.error.message || "Unknown error");
                    } else {
                        if (result.value.Data) {
                            cryptos = extractCryptosData(result.value.Data);
                        } else {
                            exchanges = result.value;
                        }
                    }
                } else {
                    outcome.errors?.push(
                        result.reason ? "Promise rejected: " + result.reason : "Promise rejected - Unknown error"
                    );
                }
            });
            if (!isEmpty(exchanges) && !isEmpty(cryptos))
                outcome.convertibles = getConvertibleCryptos(exchanges, cryptos);
            self.postMessage({ ...outcome });
        }
    });
};

self.onerror = function (e) {
    return true;
};
