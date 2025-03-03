import { lazy, Suspense, useEffect } from "react";
import { Stack } from "@mui/material";

import { BlueButton } from "components";
import { CurrencyBase, CurrencyCrypto, Selection } from "types";
import {
    useCheckApiKey,
    useConfirmChoice,
    useDebouncedCallback,
    useEnhancedState,
    useGetConvertibles,
    useResetPrices,
} from "hooks";
import { CryptoCurrencySelectForm, BaseCurrencySelectForm, Logo } from "./components";

const Description = lazy(() => import("./components/CryptoCurrencyDescription"));

const SelectionPage = () => {
    const isApiKeyAvailable = useCheckApiKey();
    const [currencyBase, setCurrencyBase] = useEnhancedState<CurrencyBase | null>(null);
    const [currencyCrypto, setCurrencyCrypto] = useEnhancedState<CurrencyCrypto | undefined>(undefined);
    const { confirmChoice, isEnabled } = useConfirmChoice({ currencyBase, currencyCrypto } as Selection);
    const handleConfirmClicked = useDebouncedCallback<HTMLButtonElement>(confirmChoice, undefined);
    useResetPrices();
    useGetConvertibles();

    if (!isApiKeyAvailable) return null;
    return (
        <main>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
                <Logo />
                <BlueButton
                    classes={isEnabled ? "enabled" : ""}
                    isEnabled={isEnabled}
                    clickHandler={handleConfirmClicked}
                    label="Pokaż kurs"
                />

                <BaseCurrencySelectForm currencyBase={currencyBase} setCurrencyBase={setCurrencyBase} />
                <CryptoCurrencySelectForm
                    currencyCrypto={currencyCrypto}
                    setCurrencyCrypto={setCurrencyCrypto}
                    aria-label="Wybierz kryptowalutę"
                />
                {currencyCrypto?.description && (
                    <Suspense fallback={null}>
                        <Description description={currencyCrypto.description} />
                    </Suspense>
                )}
            </Stack>
        </main>
    );
};

export default SelectionPage;
