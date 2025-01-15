import { useEffect } from "react";

import { useConvertibleCryptos, useLoaderStore } from "store";
import { useMessage } from "hooks";

import useGetMemoizedWorker from "./useGetWorker";

export const useGetConvertibles = () => {
    const setConvertibleCryptos = useConvertibleCryptos.use.updateConvertibleCryptos();
    const setLoader = useLoaderStore.use.setLoader();
    const showMessage = useMessage();
    const worker = useGetMemoizedWorker();

    useEffect(() => {
        worker.postMessage(null);
        setLoader(true);
        worker.onerror = function (e) {
            setLoader(false);
            showMessage.error("getConvertiblesWorker wywołał błąd: " + e.message);
        };
        worker.onmessage = (e: MessageEvent<any>) => {
            setLoader(false);
            e.data.convertibles && setConvertibleCryptos(e.data.convertibles);
            e.data.errors &&
                e.data.errors.length &&
                showMessage.error("Próba pobierania listy dostępnych kryptowalut wywołała błąd: " + e.data.errors[0]);
        };
    }, [worker]);
};

export default useGetConvertibles;
