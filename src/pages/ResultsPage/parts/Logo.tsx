interface Props {
  URL: string;
}
/**
 * creates Logo of cryptocurrency. Firstly createscomplete URL
 * @param URL string being critical part of URL
 * @returns logo component
 */
const Logo = (props: Props) => {
  const { URL } = props;
  const cryptoLogoUrl = process.env.REACT_APP_CRYPTOS_GENERAL + URL + "?width=30";

  return <img className="logo" src={cryptoLogoUrl} alt={""} aria-label={"cryptocurrency logo image"} />;
};

export default Logo;
