import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";

import { memo } from "react";

import { Description } from "../styles";

interface Props {
    description: string;
}
const CryptoCurrencyDescription = (props: Props) => {
    const { description } = props;

    return (
        <Fade in={true} timeout={1000}>
            <Paper elevation={1}>
                <Description>{description}</Description>
            </Paper>
        </Fade>
    );
};

export default memo(CryptoCurrencyDescription);
