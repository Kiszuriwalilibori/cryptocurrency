import uuid from "react-uuid";

import { Typography } from "@mui/material";
import { useCreateChanges } from "hooks";

/**
 * Creates table with historical price and percentage change
 *
 * @returns component with tabelarised data
 */

const Changes = () => {
    const changes = useCreateChanges();
    if (!changes) return null;

    return (
        <>
            {changes.map(change => (
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
