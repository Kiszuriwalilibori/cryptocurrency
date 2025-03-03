import * as React from "react";

import {
    useCreateAggregatedResults,
    useObserveCurrentCryptoPrice,
    useSetInitialHistoricalPrices,
    useReturnToSelection,
    useObserveHistoricalPrices,
} from "hooks";

import { BlueButton } from "components";
import { ResultsPageHeader } from "./parts";

const ResultsTable = React.lazy(() => import("./parts/ResultsTable"));

/**
 * Presents cryptocurrency price current and historical
 * @returns component
 */
const ResultsPage = (): JSX.Element => {
    const returnToSelection = useReturnToSelection();
    // const isInitialRender = React.useRef(true);

    useSetInitialHistoricalPrices();
    useObserveHistoricalPrices();
    useObserveCurrentCryptoPrice();

    const aggregatedResults = useCreateAggregatedResults(/*isInitialRender*/);
    console.log(aggregatedResults);

    return (
        <>
            <ResultsPageHeader text="Results of query" />
            <main>
                {aggregatedResults && <BlueButton label="Powrót do wyboru" clickHandler={returnToSelection} />}
                {aggregatedResults && (
                    <React.Suspense fallback={null}>
                        <ResultsTable results={aggregatedResults} />
                    </React.Suspense>
                )}
            </main>
        </>
    );
};

export default ResultsPage;
