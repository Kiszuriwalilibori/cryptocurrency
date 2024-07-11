import { Loader } from "components";

interface Props {
    isOK: boolean;
}
/**
 * creates indicators for loading and error
 * @param result  result of fetch operation
 * @returns component
 */
const FetchStatusIndicator = (props: Props) => {
    const { isOK } = props;

    if (!isOK) return <Loader />;

    return null;
};

export default FetchStatusIndicator;
