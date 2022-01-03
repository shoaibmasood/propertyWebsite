import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useStyles } from './about.style';

function About() {
  const {
    aboutBanner,
    aboutContainer,
    aboutHeading1,
    aboutDesc1,
    aboutHeading2,
    aboutDesc2,
    aboutCardsContainer,
    aboutRealStateContainer,
    aboutHeading3,
    aboutHeading4,
    aboutDesc4,
    aboutBtn,
  } = useStyles();
  return (
    <div>
      <Box className={aboutBanner}></Box>
      <Grid container justifyContent="center" className={aboutContainer}>
        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              align="left"
              variant="h5"
              component="div"
              fontWeight="600"
              className={aboutHeading1}
            >
              WHY ICONIC PROPERTIES?
            </Typography>
            <Typography
              variant="body1"
              maxWidth="69rem"
              align="left"
              lineHeight="1.8rem"
              className={aboutDesc1}
            >
              Iconic Properties is a real estate solutions company located in
              San Mateo, CA that specializes in buying and selling homes. We are
              experts at finding solutions for people who are in the market to
              buy or sell their own home or investment property. Our diverse
              team has experience with all types of buying and selling
              scenarios, and we understand how to make every transaction simple
              and stress free. We own and sell our homes, and are confident that
              we have something to meet the needs of every buyer. We are also
              well versed in most types of home sales and are certain that we
              can find a win-win solution for every seller, whether it be a
              traditional or creative selling solution.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/about-us-img1.jpg"
                alt="employee meeting"
                width={1000}
                height={565}
              />
            </div>
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="div"
              fontWeight="600"
              className={aboutHeading2}
            >
              OUR TEAM
            </Typography>
            <Typography
              variant="body1"
              align="left"
              maxWidth="69rem"
              lineHeight="1.8rem"
              className={aboutDesc2}
            >
              With a wealth of experience in buying and selling homes under our
              belts, our team and network of real estate experts have handled
              some of the most complicated real estate transactions on the
              market today. Whether you’re looking to sell your existing home or
              investment property, or are looking to buy your forever home or a
              new investment, our goal is to find a solution that works for both
              of us. We approach every transaction with the utmost
              professionalism and care and are dedicated to closing your
              transaction in the way that’s best for you.
            </Typography>
            <Grid container columnSpacing={3} className={aboutCardsContainer}>
              <Grid item>
                <Image src="/team-photo-1.jpg" width={350} height={234} />
                <Typography variant="h5" align="center">
                  JOHN DOE
                </Typography>
              </Grid>
              <Grid item>
                <Image src="/team-photo-3.jpg" width={350} height={234} />
                <Typography variant="h5" align="center">
                  JANE DOE
                </Typography>
              </Grid>
              <Grid item>
                <Image src="/team-photo-2.jpg" width={350} height={234} />
                <Typography variant="h5" align="center">
                  JIM DOE
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              columnSpacing={2}
              className={aboutRealStateContainer}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  component="div"
                  maxWidth="31rem"
                  fontWeight="600"
                  className={aboutHeading3}
                >
                  WE ARE A REAL ESTATE INVESTING COMPANY
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  maxWidth="33.8rem"
                  lineHeight="1.8rem"
                >
                  Our company buys, sells, and rents homes. We will not be
                  acting as your real estate agent or broker if we buy your
                  house, sell you a house, or rent a home to you. We are excited
                  about working with you directly OR with your agent or broker
                  if you are currently represented by one. We are focused on
                  improving neighborhoods and redeveloping the areas where we
                  work. If you have additional questions on agencies, please
                  contact your local real estate commission.
                </Typography>
              </Grid>
              <Grid item>
                <Image
                  src="/woman-working-laptop.jpg"
                  alt="woman working laptop"
                  width={556}
                  height={370}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography
              align="left"
              variant="h5"
              component="div"
              fontWeight="600"
              className={aboutHeading4}
            >
              WHAT MAKES US DIFFERENT
            </Typography>
            <Typography
              variant="body1"
              maxWidth="69rem"
              align="left"
              lineHeight="1.8rem"
              className={aboutDesc4}
            >
              We embrace technology because it can streamline and automate our
              real estate transactions. We use a state-of-the-art business
              management system, keeping our business extremely organized and
              efficient so that we’re able to spend less time shuffling
              paperwork and more time finding the right solutions for you.
            </Typography>
          </Box>
          <Button variant="contained" size="large" className={aboutBtn}>
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
