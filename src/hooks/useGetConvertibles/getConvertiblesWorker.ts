/* eslint-disable no-restricted-globals */

import { getConvertibleCryptos } from "functions/getConvertibleCryptos";
import { isEmpty } from "lodash";
import { CoinListAPIResponseDataItem, Convertibles, Exchanges } from "types";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

function extractCryptosData(data: CoinListAPIResponseDataItem): Convertibles {
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
    const outcome: { errors?: string[]; convertibles?: Convertibles } = {};
    let exchanges = {} as Exchanges;
    let cryptos = [] as Convertibles;
    let errors = [] as string[];
    Promise.allSettled([cryptoCompare.coinList(), cryptoCompare.exchangeList()]).then(results => {
        if (results && results.length) {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    if (result.value.error) {
                        errors.push(result.value.error.message || "Unknown error");
                    } else {
                        if (result.value.Data) {
                            cryptos = extractCryptosData(result.value.Data);
                        } else {
                            exchanges = result.value;
                        }
                    }
                } else {
                    errors.push(
                        result.reason ? "Promise rejected: " + result.reason : "Promise rejected - Unknown error"
                    );
                }
            });
            if (!isEmpty(exchanges) && !isEmpty(cryptos)) {
                outcome.convertibles = getConvertibleCryptos(exchanges, cryptos);
            }
            if (!isEmpty(errors)) {
                outcome.errors = [...errors];
            }
            self.postMessage({ ...outcome });
        }
    });
};

self.onerror = function (e) {
    return true;
};
