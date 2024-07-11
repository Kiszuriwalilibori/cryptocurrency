import { memo } from "react";
import "../styles/_generalInformation.scss";

interface Props {
    currencyCryptoName: string;
}
/**
 * Renders general information about cryptocurrency
 * @param {string} name cryptocurrency nam
 * @returns memoised component
 */
const GeneralInfo = memo((props: Props) => {
    const { currencyCryptoName } = props;
    return (
        <div className="GeneralInformation">
            <div className="title">{currencyCryptoName}</div>
            <div className="foundation">{`${currencyCryptoName} foundation`}</div>
            <div className="altcoins">Altcoins - hightest growth</div>
        </div>
    );
});

export default GeneralInfo;
