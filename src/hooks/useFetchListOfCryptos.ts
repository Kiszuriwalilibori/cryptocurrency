import axios from "axios";

import { useEffect } from "react";
import { BASE_URL } from "config";
import { useQuery } from "react-query";
import useMessage from "./useMessage";
import createOptions from "functions/createOptions";
import { ApiResponse } from "types/types";

const useFetchListOfCryptos = () => {
    const showMessage = useMessage();

    const { isLoading, error, data } = useQuery([URL], () => axios(BASE_URL.get("all")), {
        staleTime: 300000,
        cacheTime: 300000,
        select: data => createOptions(data as unknown as ApiResponse),
    });

    useEffect(() => {
        error && showMessage.error(`Błąd pobierania listy kryptowalut`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    return { isLoading, data };
};

export default useFetchListOfCryptos;
