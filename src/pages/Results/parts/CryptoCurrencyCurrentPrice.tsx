import styled from 'styled-components';
import { PriceTableCell } from './PriceTableCell';
import * as React from 'react';
import { GenericStringObject } from '../../../types';

const CurrentPriceValue = styled.div`
    font-size: 1.25rem;
    color: rgb(216, 53, 80);
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;
const CurrentPriceName = styled.div`
    font-size: 10px;
`;
/**
 * Displays cell with current cryptocurrency price
 * @param props object with current cryptocurrency price data
 * @returns component
 */
const CryptoCurrencyCurrentPrice = (props: GenericStringObject) => {
    const { currentPrice } = props;
    return currentPrice ? (
        <PriceTableCell>
            <CurrentPriceValue>{Object.values(currentPrice)[0]}</CurrentPriceValue>
            <CurrentPriceName>{Object.keys(currentPrice)[0]}</CurrentPriceName>
        </PriceTableCell>
    ) : null;
};

export default CryptoCurrencyCurrentPrice;
