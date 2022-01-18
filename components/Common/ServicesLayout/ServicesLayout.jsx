import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './ServicesLayout.styles';
import ContactForm from '../../ContactForm/ContactForm';

function ServicesLayout({ pageContent }) {
  const { servicesLayoutContainer, servicesLayoutHeadings } = useStyles();
  return (
    <Box className={servicesLayoutContainer}>
      <Typography
        variant="h4"
        fontWeight="600"
        className={servicesLayoutHeadings}
      >
        {pageContent.pageTitle}
      </Typography>
      {pageContent.pageDescription.map((desc, index) => {
        return (
          <Box key={index}>
            <Typography
              variant="h5"
              fontWeight="500"
              className={servicesLayoutHeadings}
            >
              {desc.subHeading}
            </Typography>
            {desc.paragraphs.map((para, idx) => {
              return (
                <Typography variant="body1" lineHeight="1.8rem" key={idx}>
                  {para}
                  <br />
                  <br />
                </Typography>
              );
            })}
          </Box>
        );
      })}
      <ContactForm />
    </Box>
  );
}

export default ServicesLayout;
