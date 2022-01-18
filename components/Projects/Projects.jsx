import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import { Box, Grid, Typography } from '@mui/material';
import data from '../../public/data.json';
import Slider from 'react-slick';
import { useStyles } from './Projects.styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
function Projects() {
  const {
    testimonialContainer,
    testimonialSlider,
      imgWrapper
  } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    currentSlide:1,
    nextArrow: <BsArrowRightCircleFill />,
    prevArrow: <BsArrowLeftCircleFill />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerPadding: "10px",
          centerMode: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };
  return (
    <Box className={testimonialContainer}>
      <Grid container justifyContent="center" className={testimonialSlider}>
        <Slider {...settings} style={{overFlow:'hidden'}}>
          {data.projects.map(({ title, img }, index) => (
         
             <div key={index} className={imgWrapper}>
             <Image src={img} alt={title} width={300} height={300} />
          
           </div>
          ))}
        </Slider>
      </Grid>
    </Box>
  );
}

export default Projects;
