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
            showMessage.error("fetchBooksWorker wywołał błąd: " + e.message);
        };
        worker.onmessage = (e: MessageEvent<any>) => {
            setLoader(false);
            setConvertibleCryptos(e.data.convertibles);
        };
    }, [worker]);
};

export default useGetConvertibles;
