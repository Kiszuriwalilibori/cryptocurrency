import { Changes } from "types";

export const haveResultsChanged = (results: Changes | null, result: Changes) => {
    if (JSON.stringify(results) !== JSON.stringify(result)) {
        return true;
    } else {
        return false;
    }
};

export default haveResultsChanged;
