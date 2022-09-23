import Logo from "pages/SelectionPage/parts/Logo";

function withLogo<T>(Component: React.ComponentType<T>) {
  return (props: React.PropsWithChildren<T>) => (
    <>
      <Logo />
      <Component {...props} />
    </>
  );
}

export default withLogo;
