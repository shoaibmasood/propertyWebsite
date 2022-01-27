import Head from "next/head";
import CardComponentWithBackgroundImage from "../components/Common/Card/Card";
import data from "../public/data.json";
import { Box, Grid, Typography } from "@mui/material";
import HomeDetails from "../components/Common/HomeDetails/HomeDetails";
import styles from "../styles/Home.module.css";
import ParallaxSection from "../components/Common/ParallaxSection/ParallaxSection";
import Testimonial from "../components/Testimonial/Testimonial";
import HomeButtons from "../components/Common/HomeButtons/HomeButtons";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Big Gates Properties</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Box className={styles.homeHeadingContainer}>
          <Typography variant='h1' className={styles.homeMainHeading}>
            Big Gates Properties
          </Typography>
          <Typography
            variant='h5'
            fontSize='1.26rem'
            color='white'
            className={styles.homeSubHeading}
          >
            LEADING THE WAY IN THE SAN MATEO REAL ESTATE MARKET
          </Typography>
          <HomeButtons>GET IN TOUCH</HomeButtons>
        </Box>
      </div>

      <Box position={"relative"}>
        <Grid container columnSpacing={5} justifyContent='center'>
          {data.services.map(({ title, description, route }, index) => (
            <Grid item key={index}>
              <CardComponentWithBackgroundImage
                cardDescription={description}
                cardTitle={title}
                route={route}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <HomeDetails />
      <ParallaxSection />
      <Testimonial />
    </>
  );
}
