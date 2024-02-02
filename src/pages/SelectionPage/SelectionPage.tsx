import { lazy, useState, Suspense } from "react";
import { Stack } from "@mui/material";

import { BlueButton } from "components";
import { BaseCurrency, CurrencyCrypto, UseConfirmChoice } from "types";
import { useCheckApiKey, useConfirmChoice, useDebouncedCallback } from "hooks";
import { CryptoCurrencySelectForm, BaseCurrencySelectForm, Logo } from "./components";

const Description = lazy(() => import("./components/CryptoCurrencyDescription"));

const SelectionPage = () => {
    const isApiKeyAvailable = useCheckApiKey();
    const [currencyBase, setCurrencyBase] = useState<BaseCurrency | null>(null);
    const [currencyCrypto, setCurrencyCrypto] = useState<CurrencyCrypto | undefined>(undefined);
    const { confirmChoice, isEnabled } = useConfirmChoice({ currencyBase, currencyCrypto } as UseConfirmChoice);

    const handleClick = useDebouncedCallback<HTMLButtonElement>(confirmChoice, undefined);

    if (!isApiKeyAvailable) return null;
    return (
        <main>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
                <Logo />
                <BlueButton
                    classes={isEnabled ? "enabled" : ""}
                    isEnabled={isEnabled}
                    clickHandler={handleClick}
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
