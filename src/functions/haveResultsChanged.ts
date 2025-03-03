import { ChangesArray, AggregatedResults } from "types";

interface Result {
    changes: ChangesArray;
}

export const haveResultsChanged = (results: AggregatedResults | null, result: Result) => {
    if (JSON.stringify(results) !== JSON.stringify(result)) {
        return true;
    } else {
        return false;
    }
};

export default haveResultsChanged;
