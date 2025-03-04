import { useMemo } from "react";
import { CurrencyCrypto } from "types/index";

type AvailableCryptos = Omit<CurrencyCrypto, "imageURL">[] | undefined;
function createLabelClassName(cryptos: AvailableCryptos) {
    return cryptos && cryptos.length ? "" : "inactivatedSelect";
}

const useGetLabelClassName = (availableCryptos: AvailableCryptos) => {
    const labelClass = useMemo(() => createLabelClassName(availableCryptos), [JSON.stringify(availableCryptos)]);
    return labelClass;
};
export default useGetLabelClassName;
