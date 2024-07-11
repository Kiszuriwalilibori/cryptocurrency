import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const CryptoContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30vh",
}));
export default CryptoContainer;
