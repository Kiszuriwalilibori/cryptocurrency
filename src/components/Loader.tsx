import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = withStyles({
  root: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    background: "transparent",
    paddingTop: "10vh",
  },
})(Box);

const ContainerVerticallyCentered = withStyles({
  root: {
    justifyContent: "center",
  },
})(Container);

const ColorCircularProgress = withStyles({
  root: {
    color: "rgba(122, 194, 33, 0.8);",
  },
})(CircularProgress);
/**
 * creates memoised spinner that indicates loading state
 * @returns spinner component
 */
const Loader = React.memo(() => {
  return (
    <ContainerVerticallyCentered>
      <ColorCircularProgress thickness={5} size={100} />
    </ContainerVerticallyCentered>
  );
});

export default Loader;
