import loadable from "@loadable/component";

import Loader from "./Loader";

import { Route, Routes, useLocation } from "react-router-dom";
import { useHandleConnectionStatus, useGetConvertibleCryptos } from "hooks";

const ResultsPage = loadable(() => import("pages/ResultsPage"));
const SelectionPage = loadable(() => import("pages/SelectionPage"));
const NoPage = loadable(() => import("pages/NoPage"));

function App() {
    const location = useLocation();
    useHandleConnectionStatus();

    // useGetConvertibleCryptos();

    return (
        <>
            <Routes>
                <Route path="/" element={<SelectionPage />} />
                {location?.state?.results && <Route path={"/" + location.state.results} element={<ResultsPage />} />}
                <Route path="*" element={<NoPage />} />
            </Routes>

            <Loader />
        </>
    );
}

export default App;
