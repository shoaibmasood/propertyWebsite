import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FaHandshake, FaQuestion, FaHome } from 'react-icons/fa';
import { useStyles } from './HomeDetails.styles';

function HomeDetails() {
  const { iconsDetails, detailsContainer, headingDetails, contentDetails } =
    useStyles();

  return (
    <Box className={detailsContainer}>
      <Grid
        container
        // lg={12}
        columnSpacing={5}
        justifyContent="center"
      >
        <Grid item>
          <Box className={iconsDetails}>
            <FaQuestion />
          </Box>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            className={headingDetails}
          >
            WHY ICONIC PROPERTIES?
          </Typography>
          <Typography
            variant="body1"
            maxWidth="250px"
            align="center"
            gutterBottom
            className={contentDetails}
          >
            Iconic Properties is the area’s leading real estate solutions
            company. We work with homeowners, buyers, sellers, real estate
            agents, and investors buying and selling all types of residential
            real estate. Our large network of real estate investors allows us to
            offer more buying and selling options for all types of home buyers
            and sellers.
          </Typography>
        </Grid>
        <Grid item>
          <Box className={iconsDetails}>
            <FaHandshake />
          </Box>

          <Typography
            variant="h5"
            component="h5"
            align="center"
            className={headingDetails}
          >
            OUR COMMITMENT TO YOU
          </Typography>
          <Typography
            variant="body1"
            maxWidth="250px"
            gutterBottom
            align="center"
            className={contentDetails}
          >
            Whether you’re selling, looking for an investment property, or are
            on the hunt for your family’s “forever home,” we are committed to
            helping you make the best decisions for your situation. We’re
            confident that our dedication to making your experience a smooth and
            successful process will be evident right from the start.
          </Typography>
        </Grid>
        <Grid item>
          <Box className={iconsDetails}>
            <FaHome />
          </Box>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            className={headingDetails}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="body1"
            maxWidth="250px"
            align="center"
            gutterBottom
            className={contentDetails}
          >
            We are here for you! You can call us anytime at (650) 409-6336 or
            email us at Johnny@IconicPropertiesLLC.com and we will work together
            to determine how we can best help you reach your goals.
            <br />
            <br />
            You can also fill out the short form on our Contact Us page.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeDetails;
