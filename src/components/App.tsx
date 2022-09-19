import * as React from "react";
import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <SelectionSection />
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
