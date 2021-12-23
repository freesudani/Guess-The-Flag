import React from "react";
import Modal from "../UI/Modal";
import classes from "./FinalScore.module.css";
import { motion } from "framer-motion";
import { Fireworks } from "fireworks/lib/react";
import finalScoreVariant from "../UI/FinalScoreVariant";

const FinalScore = (props) => {
  let fxProps = {
    count: 2,
    interval: 1500,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 2) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  let content;

  if (props.score > 3) {
    content = (
      <div>
        <Fireworks {...fxProps} /> <p>Congrats</p>
      </div>
    );
  }
  if (props.score <= 3) {
    content = (
      <div>
        <p>Better Luck Next Time...</p>
      </div>
    );
  }

  console.log(props.score);
  return (
    <motion.div
      variants={finalScoreVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Modal>
        <div className={classes.total}>
          <span>Total Correct Answers</span>
          <span>{props.score}/5</span>
          {content}
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
