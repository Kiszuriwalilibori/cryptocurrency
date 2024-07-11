import { CryptoPrice, ShowMessage } from "types";
import { isCryptocurrencyPriceDefined } from "types/guards";

export const communicateResults = (price: CryptoPrice, showMessage: ShowMessage) => {
    let message = isCryptocurrencyPriceDefined(price)
        ? "Zmiana"
        : "Na serwerze nie ma danych o bieżącym kursie kryptowaluty";

    if (isCryptocurrencyPriceDefined(price)) {
        showMessage.success(message);
    } else {
        showMessage.info(message);
    }
};
export default communicateResults;
