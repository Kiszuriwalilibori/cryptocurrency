import React from 'react';
import Button from '@material-ui/core/Button';
import { PriceTableCell } from './PriceTableCell';
import styled from 'styled-components';
import oko from '../../../graphics/oko.png';
import waga from '../../../graphics/waga.png';
import waga_hover from '../../../graphics/wagahover.png';
import oko_hover from '../../../graphics/okohover.png';
import MyTooltip from './MyTooltip';

const InvestWrapper = styled.div`
    width: 109px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 75px;
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 26px;
        height: 20px;
        bottom: 0px;
        left: 25px;
        background: url(${oko});
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 25px;
        height: 20px;
        bottom: 0px;
        right: 25px;
        background: url(${waga});
    }
    &:hover::after {
        content: '';
        display: block;
        position: absolute;
        width: 25px;
        height: 20px;
        bottom: 0px;
        right: 25px;
        background: url(${waga_hover});
    }
    &:hover::before {
        content: '';
        display: block;
        position: absolute;
        width: 25px;
        height: 20px;
        bottom: 0px;
        right: 25px;
        background: url(${oko_hover});
    }
`;
const InvestButton = () => {
    return (
        <PriceTableCell>
            <InvestWrapper>
                <MyTooltip title="Ta funkcjonalność nie jest jeszcze zaimplementowana" placement="top-start">
                    <Button variant="contained" color="secondary" size="small">
                        Inwestuj
                    </Button>
                </MyTooltip>
            </InvestWrapper>
        </PriceTableCell>
    );
};

export default InvestButton;
