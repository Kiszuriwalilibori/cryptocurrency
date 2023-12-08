import { Typography } from "@mui/material";
import "../styles/_CurrentPrice.scss";

/**
 * Displays cell with current cryptocurrency price
 * @param props object with current cryptocurrency price data
 * @returns component
 */
interface Props {
    currentPrice: { [key: string]: string };
}

const CurrentPrice = (props: Props) => {
    const { currentPrice } = props;

    return (
        <div className="cell">
            <Typography variant="purpleText">{Object.values(currentPrice)[0]}</Typography>
            <Typography variant="greyText">{Object.keys(currentPrice)[0]}</Typography>
        </div>
    );
};

export default CurrentPrice;
