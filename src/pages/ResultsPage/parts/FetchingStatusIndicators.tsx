import * as React from "react";

import { useSnackbar } from "notistack";

import Loader from "components/Loader";

interface Props {
  result: boolean;
  error: unknown;
  label: string;
}
/**
 * creates indicators for loading and error
 * @param props
 *
 * @returns component
 */
const FetchingStatusIndicators = (props: Props) => {
  const { result, error, label } = props;
  const { enqueueSnackbar } = useSnackbar();

  if (error) {
    enqueueSnackbar(`Podczas pobierania danych bieżących dla ${label} wystąpił błąd `, {
      variant: "error",
    });
  }

  if (!result) return <Loader />;
  return null;
};

export default FetchingStatusIndicators;
