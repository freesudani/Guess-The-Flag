import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    bottom: "0",
    left: "0",
    position: "fixed",
    height: "5rem",
    backgroundColor: "#8a2b06",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "10",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>all Rights Reserved 2022 for D-Coding</Box>
  );
};

export default Footer;
