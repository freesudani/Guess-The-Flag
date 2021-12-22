import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Navbar onFetch={props.onFetch} />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
