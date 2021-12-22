import React from "react";
import Modal from "../UI/Modal";
import classes from "./FinalScore.module.css";
import { motion } from "framer-motion";

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const FinalScoreVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    y: "-17vw",
  },
  visible: {
    opacity: 1,
    x: "-29vw",
    y: "-17vw",
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const FinalScore = (props) => {
  console.log(props.score);
  return (
    <motion.div
      variants={FinalScoreVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Modal>
        <div className={classes.total}>
          <span>Total Correct Answers</span>
          <span>{props.score}/5</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHide}>
            Close
          </button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default FinalScore;
