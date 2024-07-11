import Progress from "@mui/material/CircularProgress";

import { memo } from "react";

import { LoaderContainer } from "./styles";
import { useLoaderStore } from "store";

/**
 * creates memoised spinner that indicates loading state
 * @returns spinner component
 */
const Loader = memo(() => {
    const isActive = useLoaderStore.use.isLoaderActive();
    if (!isActive) return null;
    return (
        <LoaderContainer>
            <Progress color={"info"} thickness={5} size={100} />
        </LoaderContainer>
    );
});

export default Loader;
