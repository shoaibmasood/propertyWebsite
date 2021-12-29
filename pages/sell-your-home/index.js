import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './sellyourhome.style';

function SellYourHome() {
  const { sellYourHomeBanner } = useStyles();
  return (
    <div>
      <Box className={sellYourHomeBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default SellYourHome;
