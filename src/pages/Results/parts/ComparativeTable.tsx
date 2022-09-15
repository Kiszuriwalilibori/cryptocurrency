import * as React from "react";
import styled from "styled-components";

import { ComparativeArray } from "types";
import { PriceTableCell } from "./PriceTableCell";

const HistoricalValue = styled.div`
  font-size: 20px;
  padding: 0 3px;
`;
const HistoricalName = styled.div`
  font-size: 10px;
`;

interface Props {
  historicals: ComparativeArray;
}
/**
 * Creates table with historical price and percentage change
 * @param historicals data to be displayed
 * @returns component with tabelarised data
 */

const ComparativeTable = (props: Props): JSX.Element => {
  const { historicals } = props;

  return (
    <>
      {historicals.map((element, index) => (
        <PriceTableCell key={index}>
          <HistoricalValue key={index}>{Object.values(element)[0]}</HistoricalValue>
          <HistoricalName key={index + "x"}>{Object.keys(element)[0]}</HistoricalName>
        </PriceTableCell>
      ))}
    </>
  );
};

export default ComparativeTable;
