import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <Navbar onFetch={props.onFetch} />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
