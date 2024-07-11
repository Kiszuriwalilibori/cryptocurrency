import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { memo } from "react";

import "../styles/_InvestButton.scss";

const tooltipStyle = {
    backgroundColor: "#F5C200",
    border: `1px solid "#EE760A"`,
    boxShadow: `inset 0 0 5px "#EE760A"`,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
};

/**
 * creates button which could be in the future used for investing
 * @returns button component
 */
const InvestButton = () => {
    return (
        <div className="cell">
            <div className="InvestWrapper">
                <Tooltip
                    componentsProps={{ tooltip: { sx: tooltipStyle } }}
                    title="Ta funkcjonalność nie jest jeszcze zaimplementowana"
                    placement="top-start"
                >
                    <Button variant="contained" color="error" size="small">
                        Inwestuj
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
};

export default memo(InvestButton);
