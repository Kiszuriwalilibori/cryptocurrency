import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/components/App";
import AppProvider from "../src/components/AppProvider";

test("renders learn react link", () => {
    render(
        <AppProvider>
            <App />
        </AppProvider>
    );
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
