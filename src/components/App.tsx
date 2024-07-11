import loadable from "@loadable/component";
import useHandleConnectionStatus from "hooks/useHandleConnectionStatus";
import Loader from "./Loader";

import { Route, Routes, useLocation } from "react-router-dom";
import { useSetAvailableCryptos } from "hooks/index";

const ResultsPage = loadable(() => import("pages/ResultsPage"));
const SelectionPage = loadable(() => import("pages/SelectionPage"));
const NoPage = loadable(() => import("pages/NoPage"));

function App() {
    const location = useLocation();
    useHandleConnectionStatus();
    useSetAvailableCryptos();

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
