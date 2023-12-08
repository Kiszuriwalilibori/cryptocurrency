import Form from "@mui/material/FormControl";

import { styled } from "@mui/system";

export const BaseCurrencyForm = styled(Form)(({ theme }) => ({
    borderRadius: "2px",
    animation: "fade_in 0.1s ease-in-out forwards",
    border: `2px solid`,
    borderColor: theme.palette.secondary.main,
    padding: theme.spacing(2.5),
    width: "300px",
    boxShadow: `inset 0 0 5px ${theme.palette.secondary.light}, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)`,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    tabIndex: "0",
    "&:hover": { borderColor: theme.palette.primary.main },
    "& .MuiFormLabel-root": { color: "white", fontFamily: '"Lato", sans-serif', paddingBottom: theme.spacing(0.6) },
    "& .MuiFormGroup-root": { flexDirection: "row", justifyContent: "space-around" },
}));

export default BaseCurrencyForm;
