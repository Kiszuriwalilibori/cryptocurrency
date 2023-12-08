import { useMessage } from "hooks";
import { Loader } from "components";

interface Props {
    isOK: boolean;
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
    const { isOK, error, crypto } = props;
    const showMessage = useMessage();

    error && showMessage.error(`Podczas pobierania danych bieżących dla ${crypto} wystąpił błąd `);

    if (!isOK) return <Loader />;

    return null;
};

export default FetchStatusIndicator;
