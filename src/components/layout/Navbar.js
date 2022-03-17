import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/9329c652c9ad420ead0e9d76a615378a (1).png";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "6rem",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "10",
    [theme.breakpoints.down("md")]: {
      height: "5.5rem",
    },
  },

  logo: {
    height: "5rem",
    paddingLeft: "150%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "65%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "45%",
    },
  },

  navbarbt: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingRight: "8%",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const startTheQuizHandler = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <Box>
          <img src={LogoImage} className={classes.logo} alt="logo" />
        </Box>
        <Box className={classes.navbarbt}>
          <Button color="inherit" size="large" onClick={startTheQuizHandler}>
            Start Quiz
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
