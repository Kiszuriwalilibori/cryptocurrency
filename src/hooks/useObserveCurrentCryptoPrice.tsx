import useWebSocket, { ReadyState } from "react-use-websocket";
import { BASE_URL } from "config";
import { useContext, useEffect } from "react";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { CurrencyBase, CurrencyCrypto, LastJsonMessage } from "types";
import { useCurrentCryptoPrice } from "store";

const createInstrument = (currencyBase: CurrencyBase, currencyCrypto: CurrencyCrypto) => {
    if (currencyBase && currencyCrypto && currencyCrypto.value) {
        return `${currencyCrypto.value}-${currencyBase}`;
    } else {
        return undefined;
    }
};

export const useObserveCurrentCryptoPrice = () => {
    const { currencyBase, currencyCrypto } = useContext(SelectedCurrenciesContext);
    const setCurrentCryptoPrice = useCurrentCryptoPrice.use.setCurrentCryptoPrice();
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket<LastJsonMessage>(BASE_URL.get("socket"), {
        onOpen: () => {},
        shouldReconnect: closeEvent => true,
    });

    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            const instrument = createInstrument(currencyBase, currencyCrypto);
            sendJsonMessage({
                action: "SUB_ADD",
                groups: ["VALUE", "CURRENT_HOUR"],
                type: "1101",
                subscriptions: [{ market: "cadli", instrument }],
            });
        }
    }, [readyState, sendJsonMessage]);

    useEffect(() => {
        lastJsonMessage && lastJsonMessage.VALUE && setCurrentCryptoPrice(lastJsonMessage.VALUE);
    }, [lastJsonMessage]);
};

export default useObserveCurrentCryptoPrice;
