import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './about.style';

function About() {
  const { aboutBanner } = useStyles();
  return (
    <div>
      <Box className={aboutBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default About;
