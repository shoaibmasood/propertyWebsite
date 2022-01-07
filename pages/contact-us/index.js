import { Box, Button } from '@mui/material';
import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useStyles } from './contactus.style';

function Contact() {
  const {
    contactusBanner,
    contactusContainer,
    contactusMap,
    contactusBtnContanier,
    contactusBtn,
  } = useStyles();
  return (
    <div>
      <Box className={contactusBanner}></Box>
      <Box className={contactusContainer}>
        <Box className={contactusMap}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src="https://www.google.com/maps/embed/v1/place?q=islamabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Box>
        {/* <Box className={contactusBtnContanier}>
          <Button variant="contained" size="large" className={contactusBtn}>
            CONTACT US
          </Button>
        </Box> */}
        <ContactForm />
      </Box>
    </div>
  );
}

export default Contact;
