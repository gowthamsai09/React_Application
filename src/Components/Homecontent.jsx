import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import constants from "./constants";
const Homecontent = () => {
  const getConstants = (constantsObj) => {
    // const {title, subHeader, avatarSrc,description,imgSrc} = constantsObj
    return (
      <Grid item xs={12} sm={4}>
        <Cards {...constantsObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={5}>
      {constants.map((constantsObj) => getConstants(constantsObj))}
    </Grid>
  );
};

export default Homecontent;
