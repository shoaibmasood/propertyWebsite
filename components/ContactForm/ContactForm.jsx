import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  Divider,
  TextField,
  Typography,
  TextareaAutosize,
} from '@mui/material';

import emailjs from '@emailjs/browser';

import { useStyles } from './ContactFrom.styles';

function ContactForm() {
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const {
    contactusBtnContanier,
    contactusBtn,
    drawer,
    contactFormContainer,
    contactFormTextArea,
    contactFormTitle,
    contactFormHeading,
    contactFormBtnContainer,
  } = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_5yv0gvu',
        'template_rnj48he',
        e.target,
        'user_Udn6QBK0jt7OlWPIH5LRT'
      );

      if (response.status === 200) {
        console.log('succesfully sent');

        //closing Form after Sucessfull submission
        setState(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Box className={contactusBtnContanier}>
      <Button
        variant="contained"
        size="large"
        className={contactusBtn}
        onClick={() => setState(true)}
      >
        CONTACT US
      </Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        className={drawer}
      >
        <Box>
          <Typography
            textAlign="center"
            variant="h5"
            className={contactFormTitle}
          >
            Contact us
          </Typography>
          <Divider />

          <Box className={contactFormContainer}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  textAlign="center"
                  fontWeight="500"
                  className={contactFormHeading}
                >
                  Customer Info
                </Typography>
              </Box>
              <TextField
                required
                id="outlined-size-small"
                margin="normal"
                variant="outlined"
                size="small"
                type="text"
                name="customerName"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                required
                id="outlined-size-small"
                margin="normal"
                variant="outlined"
                size="small"
                type="email"
                name="customerEmail"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                required
                id="outlined-size-small"
                margin="normal"
                variant="outlined"
                size="small"
                type="tel"
                name="customerPhoneNumber"
                label="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                id="outlined-size-small"
                margin="normal"
                variant="outlined"
                size="small"
                type="text"
                name="customerAddress"
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextareaAutosize
                className={contactFormTextArea}
                placeholder="Enter your message"
                name="message"
                minRows={9}
                value={message}
                name="customerMessage"
                onChange={(e) => setMessage(e.target.value)}
              />

              <Box className={contactFormBtnContainer}>
                <Button
                  variant="contained"
                  type="submit"
                  className={contactusBtn}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  className={contactusBtn}
                  onClick={() => setState(false)}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default ContactForm;
