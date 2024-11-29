import { useMemo } from "react";

export const useGetMemoizedWorker = () => {
    const getEndpointsWorker: Worker = useMemo(
        () => new Worker(new URL("./getConvertiblesWorker.ts", import.meta.url)),
        []
    );
    return getEndpointsWorker;
};

export default useGetMemoizedWorker;
