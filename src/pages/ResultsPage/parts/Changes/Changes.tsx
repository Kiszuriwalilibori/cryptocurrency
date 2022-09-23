import uuid from "react-uuid";

import { ChangesArray } from "types";

interface Props {
  changesArray: ChangesArray;
}
/**
 * Creates table with historical price and percentage change
 * @param changesArray data to be displayed
 * @returns component with tabelarised data
 */

const Changes = (props: Props): JSX.Element => {
  const { changesArray } = props;

  return (
    <>
      {changesArray.map(change => (
        <div className="cell" key={uuid()}>
          <div className="value" key={uuid()}>
            {Object.values(change)[0]}
          </div>
          <div className="name" key={uuid()}>
            {Object.keys(change)[0]}
          </div>
        </div>
      ))}
    </>
  );
};

export default Changes;
