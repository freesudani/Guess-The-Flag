import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography variant="h6" align="center">
        all Rights Reserved 2022 for D-Coding
      </Typography>
    </Box>
  );
};

export default Footer;
