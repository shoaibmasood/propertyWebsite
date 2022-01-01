import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Box, Grid, Typography } from '@mui/material';
import data from '../../public/data.json';
import Slider from 'react-slick';
import { useStyles } from './Testimonial.styles';

function Testimonial() {
  const { testimonialContainer, testimonialIcon, testimonialContent } =
    useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box className={testimonialContainer}>
      <Grid container justifyContent="center">
        <Slider {...settings} style={{ maxWidth: '50rem' }}>
          {data.testimonials.map(({ name, comments }, index) => (
            <Grid item key={index}>
              <Box className={testimonialIcon}>
                <FaQuoteLeft />
              </Box>
              <Typography
                variant="body1"
                align="center"
                maxWidth="46rem"
                className={testimonialContent}
              >
                I bought my last investment property through this company! They
                were fast and fair and very good at communication so we always
                knew where we were in the buying process. I highly recommend
                working with them!
              </Typography>
              <Typography variant="body1" align="center">
                Jhon Doe
              </Typography>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Box>
  );
}

export default Testimonial;
