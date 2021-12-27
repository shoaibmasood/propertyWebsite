import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useStyles } from './header.style';
import DropDownMenu from '../utils/DropDownMenu/DropDownMenu';

const Header = () => {
  const { appbar, toolbar, logoImage, headerlink, headerIcon } = useStyles();

  return (
    <AppBar position="static" className={appbar}>
      <Toolbar disableGutters className={toolbar}>
        <Box className={logoImage}>
          <Image src={Logo} width={250} height={111} />
        </Box>
        <Box className={headerlink}>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>

          {/* <span className={servicesLink}>
              SERVICES
              <ArrowDropDownIcon />
            </span>
            <div className={dropdownContent}>
              <Link href="/sellyourhome">-Sell your Home</Link>
              <Link href="/sellyourhome">-Buy A Home</Link>
              <Link href="/sellyourhome">-Private Lender</Link>
            </div> */}
          <DropDownMenu />

          {/* <Link href="/services"> SERVICES</Link> */}
          <Link href="/contact-us">CONTACT US</Link>
          <Link href="/home-for-sale">HOME FOR SALE </Link>
        </Box>
        <Box className={headerIcon}>
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
