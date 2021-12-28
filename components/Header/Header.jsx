import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DropDownMenu from '../utils/DropDownMenu/DropDownMenu';
import { useStyles } from './header.styles';
import { Typography } from '@mui/material';

const Header = ({ pageHeading }) => {
  const { appbar, toolbar, logoImage, headerlink, headerIcon, pageheading } =
    useStyles();

  return (
    <AppBar position="static" className={appbar}>
      <Toolbar disableGutters className={toolbar}>
        <Box className={logoImage}>
          <Image src={Logo} width={250} height={111} />
        </Box>
        <Box className={headerlink}>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <DropDownMenu />
          <Link href="/contact-us">CONTACT US</Link>
          <Link href="/home-for-sale">HOME FOR SALE </Link>
        </Box>
        <Box className={headerIcon}>
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
      </Toolbar>
      {pageHeading && (
        <Typography variant="h5" className={pageheading}>
          {pageHeading}
        </Typography>
      )}
    </AppBar>
  );
};
export default Header;
