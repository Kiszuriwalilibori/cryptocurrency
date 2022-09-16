import * as React from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { ChangesArray } from "types";
import { PriceTableCell } from "./PriceTableCell";

const HistoricalValue = styled.div`
  font-size: 20px;
  padding: 0 3px;
`;
const HistoricalName = styled.div`
  font-size: 10px;
`;

interface Props {
  changesArray: ChangesArray;
}
/**
 * Creates table with historical price and percentage change
 * @param changesArray data to be displayed
 * @returns component with tabelarised data
 */

const TableOfChanges = (props: Props): JSX.Element => {
  const { changesArray } = props;

  return (
    <>
      {changesArray.map(change => (
        <PriceTableCell key={uuid()}>
          <HistoricalValue key={uuid()}>{Object.values(change)[0]}</HistoricalValue>
          <HistoricalName key={uuid()}>{Object.keys(change)[0]}</HistoricalName>
        </PriceTableCell>
      ))}
    </>
  );
};

export default TableOfChanges;
