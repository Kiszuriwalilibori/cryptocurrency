import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/system";

export const Legend = styled(FormLabel)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.common.white,
    "&:focus": { color: theme.palette.common.white },
    "&.Mui-focused": { color: theme.palette.common.white },
}));

export default Legend;
