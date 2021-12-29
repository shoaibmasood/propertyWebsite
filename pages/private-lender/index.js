import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './privatelender.style';

function PrivateLender() {
  const { privateLenderBanner } = useStyles();
  return (
    <div>
      <Box className={privateLenderBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default PrivateLender;
