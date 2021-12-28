import { Box, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';
// import HeaderImage from '../../public/backgroundheader.jpg';
import Header from '../../components/Header/Header';
import { useStyles } from './about.style';

function About() {
  const { aboutBanner } = useStyles();
  return (
    <div>
      <Box className={aboutBanner}>
        <Header pageHeading={'ABOUT US'} />
      </Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default About;
