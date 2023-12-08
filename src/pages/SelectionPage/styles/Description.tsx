import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Description = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "300px",
    color: theme.palette.common.white,
    borderRadius: 1,
    padding: theme.spacing(2),
    border: "2px solid",
    borderColor: theme.palette.primary.dark,
    boxShadow: `inset 0 0 5px ${theme.palette.primary.dark}, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)`,
}));
export default Description;
