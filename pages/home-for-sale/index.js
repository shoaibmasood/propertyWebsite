import { Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles/homeforsale.style";

function HomeForSale() {
  const { homeForSaleBanner } = useStyles();
  return (
    <div>
      <Box className={homeForSaleBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default HomeForSale;
