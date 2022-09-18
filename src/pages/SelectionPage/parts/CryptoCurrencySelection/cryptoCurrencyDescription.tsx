import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

interface Props {
  description: string;
}
const CryptoCurrencyDescription = (props: Props) => {
  const { description } = props;

  return (
    <Fade in={true} timeout={1000}>
      <Paper elevation={1}>
        <Box
          sx={{
            bgcolor: "#1076AB",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            maxWidth: 300,
            color: "white",
          }}
        >
          {description}
        </Box>
      </Paper>
    </Fade>
  );
};

export default CryptoCurrencyDescription;
