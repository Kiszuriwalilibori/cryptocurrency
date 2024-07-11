import { useEffect } from "react";

import { useAvailableCryptos, useLoaderStore } from "store";
import { useDelayedCondition, useFetchAvailableCryptos } from "hooks";

export const useSetAvailableCryptos = () => {
    const { isLoading, convertibleCryptos } = useFetchAvailableCryptos();
    const setAvailableCryptos = useAvailableCryptos.use.updateAvailableCryptos();
    const shouldRenderLoader = useDelayedCondition(isLoading);
    const setLoader = useLoaderStore.use.setLoader();

    useEffect(() => {
        setAvailableCryptos(convertibleCryptos);
    }, [convertibleCryptos]);

    useEffect(() => {
        setLoader(shouldRenderLoader);
    }, [shouldRenderLoader]);
};

export default useSetAvailableCryptos;
