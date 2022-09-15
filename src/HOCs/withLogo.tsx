import * as React from "react";
import Logo from "../pages/Selection/parts/Logo";

function withLogo<T>(Component: React.ComponentType<React.PropsWithChildren<T>>) {
  return (props: React.PropsWithChildren<T>) => (
    <>
      <Logo />
      <Component {...props} />
    </>
  );
}

export default withLogo;
