import { Typography } from "@mui/material";
import "../styles/_CurrentPrice.scss";

import { SelectedCurrenciesContext } from "contexts/currenciesContext";
import { useContext } from "react";
import { useCurrentCryptoPrice } from "store";
import { CurrencyBase } from "types/index";
/**
 * Displays cell with current cryptocurrency price
 * @returns component
 */
const formatCurrentPrice = (currentPrice: number, currencyBase: CurrencyBase) => {
    const preformattedCurrentPrice =
        currentPrice >= 1 ? Math.round(currentPrice * 100) / 100 : Math.round(currentPrice * 100000000) / 100000000;

    const formattedCurrentPrice =
        preformattedCurrentPrice.toString().length > 10
            ? preformattedCurrentPrice.toExponential(2)
            : preformattedCurrentPrice.toString();
    const priceWithCoin = formattedCurrentPrice + " " + currencyBase;

    return priceWithCoin;
};

const CurrentPrice = () => {
    const { currencyBase } = useContext(SelectedCurrenciesContext);
    const current = useCurrentCryptoPrice.use.currentCryptoPrice();
    const formattedCurrentCryptoPrice =
        typeof current === "number" ? formatCurrentPrice(current, currencyBase) : "Brak danych";

    return (
        <div className="cell">
            <Typography variant="purpleText">{formattedCurrentCryptoPrice}</Typography>
            <Typography variant="greyText">{"Aktualna cena"}</Typography>
        </div>
    );
};

export default CurrentPrice;
