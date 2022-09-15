import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./components/App";
import AppProvider from "../src/components/AppProvider";
import { breakWhenInternetExplorer } from "functions";

breakWhenInternetExplorer();

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,

  document.getElementById("root")
);
