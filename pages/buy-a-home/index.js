import { Box } from "@mui/material";
import React from "react";
import data from "../../public/data.json";
import ServicesLayout from "../../components/Common/ServicesLayout/ServicesLayout";
import { useStyles } from "../../styles/buyahome.style";

function BuyaHome() {
  const { buyaHomeBanner } = useStyles();
  return (
    <Box>
      <Box className={buyaHomeBanner}></Box>
      <ServicesLayout pageContent={data.services[0]} />
    </Box>
  );
}

export default BuyaHome;
