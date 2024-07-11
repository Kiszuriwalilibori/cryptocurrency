import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BaseCurrency, CurrencyCrypto } from "types";
import { SelectedCurrenciesContext } from "contexts/currenciesContext";

interface Props {
    currencyBase: BaseCurrency;
    currencyCrypto: CurrencyCrypto;
}
/**
 * Creates button which - when clicked - accepts chosen currencies to context and switches to page wit results
 * @param props currency base: base currency, currencyCrypto: cryptocurrency
 * @returns button component
 */
const useConfirmChoice = (props: Props) => {
    const { currencyBase, currencyCrypto } = props;
    const navigate = useNavigate();
    const { setCurrencyBase, setCurrencyCrypto } = useContext(SelectedCurrenciesContext);
    const isEnabled = currencyBase && currencyCrypto ? true : false;
    const pathToResults = isEnabled ? `exchange rate for pair ${currencyCrypto.label}:${currencyBase}` : undefined;

    const confirmChoice = useCallback(() => {
        setCurrencyBase(currencyBase);
        setCurrencyCrypto(currencyCrypto);
        if (pathToResults) navigate(pathToResults, { state: { results: pathToResults } });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathToResults]);

    return { confirmChoice, isEnabled };
};

export default useConfirmChoice;
