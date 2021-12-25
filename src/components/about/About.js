import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className={classes.AboutBox}
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>World Flag Quiz Test</h1>
      <h2>Please Read Below Instructions</h2>
      <div>
        <p>1. You will presented with 5 different flags</p>
        <p>2. Please choose the correct flag out of the options</p>
        <p>3. You can Exit the Quize at any stage</p>
      </div>
      <Link to="/quiz">
        <button className={classes.btn}>Start Quiz</button>
      </Link>
    </motion.div>
  );
};

export default About;
