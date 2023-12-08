import { BASE_URL } from "config";

interface Props {
    imageURL: string;
}
/**
 * creates Logo of cryptocurrency. Firstly createscomplete URL
 * @param URL string being critical part of URL
 * @returns logo component
 */
const Logo = (props: Props) => {
    const { imageURL } = props;

    const cryptoLogoUrl = BASE_URL.get("general") + imageURL + "?width=30";

    return <img className="logo" src={cryptoLogoUrl} alt={"Logo"} />;
};

export default Logo;
