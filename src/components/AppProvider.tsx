import React from "react";
import { SnackbarProvider } from "notistack";
import { SelectedCurrenciesContextProvider } from "contexts/currenciesContext";
import { HashRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { register } from "../serviceWorkerRegistration";

import reducer from "../reducer/reducer";
import "styles/styles.css";

export const store = createStore(reducer);

/**
 * creates provider of redux store, router, snackbar, and selectedcurrenciescontext
 * @param param0 anything renders within this provider
 * @returns provider
 */
const AppProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <SelectedCurrenciesContextProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {children}
          </SnackbarProvider>
        </SelectedCurrenciesContextProvider>
      </Router>
    </Provider>
  );
};
register();
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default AppProvider;
