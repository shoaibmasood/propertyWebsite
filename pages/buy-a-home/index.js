import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './buyahome.style';

function BuyaHome() {
  const { buyaHomeBanner } = useStyles();
  return (
    <div>
      <Box className={buyaHomeBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default BuyaHome;
