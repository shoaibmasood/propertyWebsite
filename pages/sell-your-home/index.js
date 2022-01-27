import { Box } from "@mui/material";
import React from "react";
import ServicesLayout from "../../components/Common/ServicesLayout/ServicesLayout";
import data from "../../public/data.json";
import { useStyles } from "../../styles/sellyourhome.style";

function SellYourHome() {
  const { sellYourHomeBanner } = useStyles();
  return (
    <Box>
      <Box className={sellYourHomeBanner}></Box>
      <ServicesLayout pageContent={data.services[0]} />
    </Box>
  );
}

export default SellYourHome;
