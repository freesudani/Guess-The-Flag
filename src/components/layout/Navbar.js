import React from "react";
import classes from "./Navbar.module.css";
import LogoImage from "../assets/9329c652c9ad420ead0e9d76a615378a (1).png";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <img src={LogoImage} className={classes.logo} />
      </div>
      <div>
        <ul className={classes.list}>
          <li>
            <a>Start Quiz</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
