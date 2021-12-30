import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useStyles } from './Footer.styles';

function Footer() {
  const {
    footerContainer,
    footerLink,
    footerLinkCol1,
    footerLinkCol2,
    footerAddress,
    footerIcon,
  } = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} className={footerContainer}>
        <Box className={footerLink}>
          <Box className={footerLinkCol1}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/sell-your-home">Sell Your Home </Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/contact-us">Contact Us</Link>
          </Box>
          <Box className={footerLinkCol2}>
            <Link href="/faq">FAQ</Link>
            <Link href="/buy-a-home">Buy a Home</Link>
            <Link href="/testimonials">Testimonials</Link>
          </Box>
        </Box>
        <Box className={footerAddress}>
          <Typography> 7 West 41st Ave #222</Typography>
          <Typography>San Mateo, CA 94403</Typography>
          <Typography>(650)409-6336</Typography>
          <Typography>Johnny@IconicPropertiesLLC.com</Typography>
        </Box>
        <Box className={footerIcon}>
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
