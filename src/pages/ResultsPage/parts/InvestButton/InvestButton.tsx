import { memo } from "react";
import Button from "@material-ui/core/Button";

import Tooltip from "../Tooltip";

import "./_InvestButton.scss";

/**
 * creates button which could be in the future used for investing
 * @returns button component
 */
const InvestButton = () => {
  return (
    <div className="cell">
      <div className="InvestWrapper">
        <Tooltip title="Ta funkcjonalność nie jest jeszcze zaimplementowana" placement="top-start">
          <Button variant="contained" color="secondary" size="small">
            Inwestuj
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default memo(InvestButton);
