import ReactDOM from "react-dom";

import "./styles/styles.css";

import { App, AppProvider } from "components";
import { breakWhenInternetExplorer } from "functions";

breakWhenInternetExplorer();

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,

    document.getElementById("root")
);
