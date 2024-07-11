import uuid from "react-uuid";

import { Typography } from "@mui/material";

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
                    <Typography variant="purpleText" key={uuid()}>
                        {Object.values(change)[0]}
                    </Typography>

                    <Typography variant="greyText" key={uuid()}>
                        {Object.keys(change)[0]}
                    </Typography>
                </div>
            ))}
        </>
    );
};

export default Changes;
