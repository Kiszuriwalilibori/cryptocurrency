import * as React from "react";

import { useLazyAxios } from "use-axios-client";
import { useSnackbar } from "notistack";
import { shallowEqual, useDispatch } from "react-redux";

import Loader from "components/Loader";
import { ApiResponseType } from "types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { createOptions } from "functions";

const FetchListOfAllCryptos = ({ children }: any) => {
  const ref = React.useRef({
    fetchingListActive: false,
    listReceived: false,
  });

  const { enqueueSnackbar } = useSnackbar();
  const listOfAllCryptos = useTypedSelector(state => state.listOfAllCryptos, shallowEqual);
  const dispatch = useDispatch();
  const [getListOfAllAvailableCryptos, { data: dataFromCryptosAPI, error: listError, loading }] = useLazyAxios({
    url: process.env.REACT_APP_ALL_CRYPTOS_URL,
  });
  React.useEffect(() => {
    listError &&
      enqueueSnackbar(`Błąd pobierania listy kryptowalut`, {
        variant: "error",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listError]);

  React.useEffect(() => {
    if (dataFromCryptosAPI && !ref.current.listReceived) {
      const options = createOptions(dataFromCryptosAPI as ApiResponseType);
      dispatch({ type: "LIST_OF_ALL_CRYPTOS_SET", payload: options });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFromCryptosAPI, ref.current.listReceived]);

  if (!listOfAllCryptos && !ref.current.fetchingListActive) {
    ref.current.fetchingListActive = true;
    getListOfAllAvailableCryptos();
  }

  if (listOfAllCryptos && !ref.current.listReceived) {
    ref.current.listReceived = true;
  }
  if (loading) return <Loader />;
  return children;
};

export default FetchListOfAllCryptos;
