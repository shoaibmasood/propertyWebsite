import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './sellyourhome.style';

function SellYourHome() {
  const { sellYourHomeBanner } = useStyles();
  return (
    <div>
      <Box className={sellYourHomeBanner}></Box>
      {/* ----------------TESTING--------------  */}
      {/* <div>
        <h1>{data.services[0].pageTitle}</h1>
        {data.services[0].pageDescription.map((desc) => {
          return (
            <>
              {" "}
              <h3>{desc.subHeading}</h3>
              {desc.paragraphs.map((para) => {
                return (
                  <p>
                    {para}
                    <br />
                  </p>
                )
              })}
            </>
          )})}
        </div> */}
    </div>
  );
}

export default SellYourHome;
