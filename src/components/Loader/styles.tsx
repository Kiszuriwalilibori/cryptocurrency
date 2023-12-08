import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const LoaderContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: "0",
    left: "0",
    alignItems: "center",
    background: "transparent",
    justifyContent: "center",
}));

export default LoaderContainer;
