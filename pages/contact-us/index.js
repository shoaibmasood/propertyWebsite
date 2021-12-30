import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './contactus.style';

function Contact() {
  const { contactusBanner } = useStyles();
  return (
    <div>
      <Box className={contactusBanner}></Box>
      <Grid>hello</Grid>
    </div>
  );
}

export default Contact;
