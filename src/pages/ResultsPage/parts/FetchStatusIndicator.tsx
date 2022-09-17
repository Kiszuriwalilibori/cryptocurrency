import * as React from "react";

import { useSnackbar } from "notistack";

import Loader from "components/Loader";

interface Props {
  result: boolean;
  error: unknown;
  crypto: string;
}
/**
 * creates indicators for loading and error
 * @param result  result of fetch operation
 * @param error possible error in fetch operation
 * @param crypto name of current cryptocurrency
 * @returns component
 */
const FetchStatusIndicator = (props: Props) => {
  const { result, error, crypto } = props;
  const { enqueueSnackbar } = useSnackbar();

  if (error) {
    enqueueSnackbar(`Podczas pobierania danych bieżących dla ${crypto} wystąpił błąd `, {
      variant: "error",
    });
  }

  if (!result) return <Loader />;

  return null;
};

export default FetchStatusIndicator;
