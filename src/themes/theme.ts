import { createTheme } from "@mui/material";
import { blue, indigo, grey } from "@mui/material/colors";

import {
    COLOR_PRIMARY_AMBER,
    COLOR_PURPLE,
    COLOR_SECONDARY_BLACKY,
    COLOR_SECONDARY_BLACKY_LIGHT,
    COLOR_SECONDARY_BLUE_LIGHTER,
} from "./constants";

declare module "@mui/material/styles" {
    interface Palette {
        primaryLight: Palette;
    }

    interface PaletteOptions {
        primaryLight?: PaletteOptions["primary"];
    }
    interface TypographyVariants {
        purpleText: React.CSSProperties;
        greyText: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        purpleText?: React.CSSProperties;
        greyText?: React.CSSProperties;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        greyText: true;
        purpleText: true;
    }
}
const theme = createTheme({
    palette: {
        primary: {
            main: COLOR_PRIMARY_AMBER,
            dark: indigo[900],
            light: blue[900],
        },
        secondary: {
            main: COLOR_SECONDARY_BLACKY,
            light: COLOR_SECONDARY_BLACKY_LIGHT,
        },
        primaryLight: {
            main: COLOR_SECONDARY_BLUE_LIGHTER,
        },
    },
    typography: {
        purpleText: {
            color: COLOR_PURPLE,
            fontSize: "1.25rem",
            // "@media (max-width:400px)": {
            //     fontSize: "1rem",
            // },
        },
        greyText: {
            fontSize: "10px",
            color: grey[600],
        },
    },
});
export default theme;
