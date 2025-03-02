import * as React from "react";

import {
    useCreateAggregatedResults,
    useFetchHistoricalPrices,
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
    const isInitialRender = React.useRef(true);
    const { historicalCryptoPrice, fetchHistoricalPrices } = useFetchHistoricalPrices();

    useSetInitialHistoricalPrices(fetchHistoricalPrices);

    useObserveHistoricalPrices();
    useObserveCurrentCryptoPrice();

    const aggregatedResults = useCreateAggregatedResults(historicalCryptoPrice, isInitialRender);

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
