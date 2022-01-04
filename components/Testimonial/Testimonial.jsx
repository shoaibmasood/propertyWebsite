import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import { Box, Grid, Typography } from '@mui/material';
import data from '../../public/data.json';
import Slider from 'react-slick';
import { useStyles } from './Testimonial.styles';

function Testimonial() {
  const {
    testimonialContainer,
    testimonialSlider,
    testimonialIcon,
    testimonialContent,
  } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide:1,
    nextArrow: <BsArrowRightCircleFill />,
    prevArrow: <BsArrowLeftCircleFill />,
  };
  return (
    <Box className={testimonialContainer}>
      <Grid container justifyContent="center" className={testimonialSlider}>
        <Slider {...settings}>
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
                {comments}
              </Typography>
              <Typography variant="body1" align="center">
                {name}
              </Typography>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Box>
  );
}

export default Testimonial;
