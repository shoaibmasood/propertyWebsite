import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/home-for-sale">HOME FOR SALE </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
