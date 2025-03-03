import * as React from "react";

import {
    useCreateAggregatedResults,
    useObserveCurrentCryptoPrice,
    useSetInitialHistoricalPrices,
    useReturnToSelection,
    useObserveHistoricalPrices,
    useIsCurrentPriceSet,
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

    useSetInitialHistoricalPrices();
    useObserveHistoricalPrices();
    useObserveCurrentCryptoPrice();
    const isCurrentPriceSet = useIsCurrentPriceSet();

    return (
        <>
            <ResultsPageHeader text="Results of query" />
            <main>
                {isCurrentPriceSet && <BlueButton label="Powrót do wyboru" clickHandler={returnToSelection} />}
                {isCurrentPriceSet && (
                    <React.Suspense fallback={null}>
                        <ResultsTable />
                    </React.Suspense>
                )}
            </main>
        </>
    );
};

export default ResultsPage;
