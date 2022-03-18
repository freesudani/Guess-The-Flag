import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100vw",
    bottom: "0",
    position: "fixed",
    height: "5rem",
    backgroundColor: "#8a2b06",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "10",
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
    },
  },
}));

const Footer = () => {
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //260px

  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography
        variant={MQmb ? "body2" : MQmd ? "subtitle1" : "h6"}
        align="center"
      >
        all Rights Reserved 2022 for D-Coding
      </Typography>
    </Box>
  );
};

export default Footer;
