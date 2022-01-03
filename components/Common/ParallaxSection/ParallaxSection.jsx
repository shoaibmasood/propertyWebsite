import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './ParallaxSection.styles';

function ParallaxSection() {
  const { parallaxSection, parallaxSectionContent } = useStyles();
  return (
    <div>
      <Box className={parallaxSection}>
        <Box className={parallaxSectionContent}>
          <Typography variant="h4" color="white" align="center">
            REAL ESTATE IS OUR PASSION
          </Typography>
          <Typography
            variant="body1"
            color="white"
            align="center"
            maxWidth="65rem"
          >
            We are thrilled to be a part of this next chapter in your life. Our
            commitment to excellence starts with treating you and your
            transaction with the utmost professionalism and care. We know that
            buying or selling a home is one of the biggest decisions you’ll ever
            make and we are humbled that so many homeowners choose us to join
            them on their journey. We look forward to earning your business
            today.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ParallaxSection;
