import * as React from "react";
import { useLazyAxios } from "use-axios-client";
import { useSnackbar } from "notistack";
import { shallowEqual, useDispatch } from "react-redux";
import { ApiResponse } from "types";
import { useTypedSelector } from "hooks";
import { createOptions } from "functions";
import { CircularProgress } from "components/Loader";

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
      const options = createOptions(dataFromCryptosAPI as ApiResponse);
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

  return (
    <>
      {children}
      {loading && <CircularProgress thickness={5} size={100} />}
    </>
  );
};

export default FetchListOfAllCryptos;
