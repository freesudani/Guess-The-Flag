import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@mui/styles";
import bgImage from "../assets/pexels-pixabay-41949.jpg";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "3rem",
    background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),url(${bgImage})`,
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
