import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./_NoPage.scss";

const NoPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="NoPage">
            <h2>Ojejku! Strony o adresie "{decodeURIComponent(window.location.href)}" po prostu nie ma &#128549;</h2>;
        </div>
    );
};

export default NoPage;
