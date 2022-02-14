import * as React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Results = lazy(() => import('../pages/Results'));

const SelectionPage = lazy(() => import('../pages/Selection'));
/**
 * function that returns App itself
 * @returns App
 */
function App() {
    const location = useLocation();
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<></>}>
                        <SelectionPage />
                    </Suspense>
                </Route>

                <Route path={location.pathname}>
                    <QueryClientProvider client={queryClient}>
                        <Suspense fallback={null}>
                            <Results />
                        </Suspense>
                    </QueryClientProvider>
                </Route>
            </Switch>
        </>
    );
}

export default App;
