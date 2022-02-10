import { PriceTableCell } from './PriceTableCell';
import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HistoricalValue = styled.div`
    font-size: 20px;
    padding: 0 3px;
`;
const HistoricalName = styled.div`
    font-size: 10px;
`;

const ComparativeTable = props => {
    const { historicals } = props;

    return historicals.map((element, index) => (
        <PriceTableCell key={index}>
            <HistoricalValue key={index}>{Object.values(element)[0]}</HistoricalValue>
            <HistoricalName key={index + 'x'}>{Object.keys(element)[0]}</HistoricalName>
        </PriceTableCell>
    ));
};

export default ComparativeTable;

ComparativeTable.propTypes = {
    historicals: PropTypes.array,
};
