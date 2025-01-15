/* eslint-disable no-restricted-globals */

import { getConvertibleCryptos } from "functions/getConvertibleCryptos";
import { isEmpty } from "lodash";
import { CoinListAPIResponseDataItem, AvailableCryptocurrencies, Exchanges } from "types";

const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(process.env.REACT_APP_API_KEY);

function extractCryptosData(data: CoinListAPIResponseDataItem): AvailableCryptocurrencies {
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
    const outcome: { errors?: string[]; convertibles?: AvailableCryptocurrencies } = {};
    let exchanges = {} as Exchanges;
    let cryptos = [] as AvailableCryptocurrencies;
    let errors = [] as string[];
    Promise.allSettled([cryptoCompare.coinList(), cryptoCompare.exchangeList()]).then(results => {
        if (results && results.length) {
            console.log("results", results);
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
                    console.log("not fulfilled?");
                    errors.push(
                        result.reason ? "Promise rejected: " + result.reason : "Promise rejected - Unknown error"
                    );
                    // outcome.errors?.push(
                    //     result.reason ? "Promise rejected: " + result.reason : "Promise rejected - Unknown error"
                    // );
                    console.log("errors from not fulfilled", errors);
                }
            });
            if (!isEmpty(exchanges) && !isEmpty(cryptos)) {
                outcome.convertibles = getConvertibleCryptos(exchanges, cryptos);
            }
            if (!isEmpty(errors)) {
                outcome.errors = [...errors];
            }

            console.log("outcome", outcome);
            self.postMessage({ ...outcome });
        } else {
            console.log("no results");
        }
    });
};

self.onerror = function (e) {
    return true;
};
