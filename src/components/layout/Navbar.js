import React from "react";

import LogoImage from "../assets/9329c652c9ad420ead0e9d76a615378a (1).png";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    top: "0",
    left: "0",
    width: "100%",
    height: "6rem",
    backgroundColor: "#8a2b06",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "10",
  },

  logo: {
    height: "5rem",
    paddingLeft: "8rem",
  },

  button: {
    width: "14rem",
    height: "100%",
    display: "flex",
    alignItems: "center",

    paddingRight: "7rem",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Box>
            <img src={LogoImage} className={classes.logo} alt="" />
          </Box>
          <Box className={classes.button}>
            <Button color="inherit" size="large" onClick={() => navigate("/")}>
              Start Quiz
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
