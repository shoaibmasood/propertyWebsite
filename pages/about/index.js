import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import data from "../../public/data.json";
import { useStyles } from "../../styles/about.style";

function About() {
  const {
    aboutBanner,
    aboutContainer,
    aboutHeading1,
    aboutDesc1,
    aboutimg1Container,
    aboutHeading2,
    aboutDesc2,
    aboutCardsContainer,
    aboutRealStateContainer,
    aboutHeading3,
    aboutDesc3,
    aboutHeading4,
    aboutDesc4,
    aboutBtn,
    aboutSec3Img,
  } = useStyles();
  return (
    <div>
      <Box className={aboutBanner}></Box>
      <Box className={aboutContainer}>
        <Box>
          <Typography
            align='left'
            variant='h5'
            component='div'
            fontWeight='600'
            className={aboutHeading1}
          >
            {data.aboutUs.heading1}
          </Typography>
          <Typography
            variant='body1'
            maxWidth='69rem'
            align='left'
            lineHeight='1.8rem'
            className={aboutDesc1}
          >
            {data.aboutUs.desc1}
          </Typography>
          <Box className={aboutimg1Container}>
            <Image
              src='/about-us-img1.jpg'
              alt='employee meeting'
              width={1000}
              height={565}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant='h5'
            component='div'
            fontWeight='600'
            className={aboutHeading2}
          >
            {data.aboutUs.heading2}
          </Typography>
          <Typography
            variant='body1'
            align='left'
            maxWidth='69rem'
            lineHeight='1.8rem'
            className={aboutDesc2}
          >
            {data.aboutUs.desc2}
          </Typography>
          <Box className={aboutCardsContainer}>
            <Box>
              <Image
                src='/team-photo-1.jpg'
                width={350}
                height={234}
                alt='team-photo'
              />
              <Typography variant='h5' align='center'>
                JOHN DOE
              </Typography>
            </Box>
            <Box>
              <Image
                src='/team-photo-3.jpg'
                width={350}
                height={234}
                alt='team-photo-3'
              />
              <Typography variant='h5' align='center'>
                JANE DOE
              </Typography>
            </Box>
            <Box>
              <Image
                src='/team-photo-2.jpg'
                width={350}
                height={234}
                alt='team-photo-3'
              />
              <Typography variant='h5' align='center'>
                JIM DOE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={aboutRealStateContainer}>
          <Box style={{ flex: 0.5 }}>
            <Typography
              align='left'
              variant='h5'
              component='div'
              fontWeight='600'
              className={aboutHeading3}
            >
              {data.aboutUs.heading3}
            </Typography>
            <Typography
              align='left'
              variant='body1'
              lineHeight='1.8rem'
              className={aboutDesc3}
            >
              {data.aboutUs.desc3}
            </Typography>
          </Box>
          <Box style={{ flex: 0.5 }}>
            <Image
              src='/woman-working-laptop.jpg'
              alt='woman working laptop'
              width={556}
              height={370}
              className={aboutSec3Img}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            align='left'
            variant='h5'
            component='div'
            fontWeight='600'
            className={aboutHeading4}
          >
            {data.aboutUs.heading4}
          </Typography>
          <Typography
            variant='body1'
            maxWidth='69rem'
            align='left'
            lineHeight='1.8rem'
            className={aboutDesc4}
          >
            {data.aboutUs.desc4}
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </div>
  );
}

export default About;
