import React from "react";
import { Box } from "@mui/material";
import data from "../../public/data.json";
import { useStyles } from "../../styles/privatelender.style";
import ServicesLayout from "../../components/Common/ServicesLayout/ServicesLayout";

function PrivateLender() {
  const { privateLenderBanner } = useStyles();
  return (
    <div>
      <Box className={privateLenderBanner}></Box>
      <ServicesLayout pageContent={data.services[0]} />
    </div>
  );
}

export default PrivateLender;
