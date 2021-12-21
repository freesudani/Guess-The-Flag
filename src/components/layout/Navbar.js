import React from "react";
import classes from "./Navbar.module.css";
import LogoImage from "../assets/9329c652c9ad420ead0e9d76a615378a (1).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <img src={LogoImage} className={classes.logo} alt="" />
      </div>
      <div>
        <ul className={classes.list}>
          <li>
            <Link to="/quiz">Start Quiz</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
