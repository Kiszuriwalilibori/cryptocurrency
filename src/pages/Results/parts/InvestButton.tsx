import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { PriceTableCell } from "./PriceTableCell";

import Tooltip from "./Tooltip";

import oko from "graphics/oko.png";
import waga from "graphics/waga.png";
import waga_hover from "graphics/wagahover.png";
import oko_hover from "graphics/okohover.png";

const InvestWrapper = styled.div`
  width: 109px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 75px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 26px;
    height: 20px;
    bottom: 0px;
    left: 25px;
    background: url(${oko});
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 20px;
    bottom: 0px;
    right: 25px;
    background: url(${waga});
  }
  &:hover::after {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 20px;
    bottom: 0px;
    right: 25px;
    background: url(${waga_hover});
  }
  &:hover::before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 20px;
    bottom: 0px;
    right: 25px;
    background: url(${oko_hover});
  }
`;
/**
 * creates button which could be in the future used for investing
 * @returns button component
 */
const InvestButton = () => {
  return (
    <PriceTableCell>
      <InvestWrapper>
        <Tooltip title="Ta funkcjonalność nie jest jeszcze zaimplementowana" placement="top-start">
          <Button variant="contained" color="secondary" size="small">
            Inwestuj
          </Button>
        </Tooltip>
      </InvestWrapper>
    </PriceTableCell>
  );
};

export default InvestButton;
