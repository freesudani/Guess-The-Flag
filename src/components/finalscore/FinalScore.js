import React from "react";
import Modal from "../UI/Modal";
import classes from "./FinalScore.module.css";

const FinalScore = (props) => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Correct Answers</span>
        <span>3/5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FinalScore;
