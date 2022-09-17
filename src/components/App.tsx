import * as React from "react";
import { lazy, Suspense } from "react";
import { /*BrowserRouter as Router,*/ Switch, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import FetchListOfAllCryptos from "pages/SelectionPage/fetchListOfAllCryptos";

const queryClient = new QueryClient();

const Results = lazy(() => import("pages/ResultsPage"));

const SelectionSection = lazy(() => import("pages/SelectionPage/SelectionSection"));
/**
 * function that returns App itself
 * @returns App
 */
function App() {
  const location = useLocation();
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={null}>
            <FetchListOfAllCryptos>
              <SelectionSection />
            </FetchListOfAllCryptos>
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
    </main>
  );
}

export default App;
