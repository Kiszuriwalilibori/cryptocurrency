import { SnackbarProvider } from "notistack";
import { HashRouter as Router } from "react-router-dom";
import { register } from "../serviceWorkerRegistration";
import { ThemeProvider } from "@mui/material";

import { SelectedCurrenciesContextProvider } from "contexts/currenciesContext";

import "styles/styles.css";

import theme from "../themes/theme";

/**
 * creates provider of router, snackbar, and selectedcurrenciescontext
 * @param children anything renders within this provider
 * @returns provider
 */

const AppProvider: React.FC = ({ children }) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <SelectedCurrenciesContextProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                    >
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </SnackbarProvider>
                </SelectedCurrenciesContextProvider>
            </ThemeProvider>
        </Router>
    );
};
register();

export default AppProvider;
