import React from "react";
import Modal from "../UI/Modal";
import classes from "./FinalScore.module.css";

const FinalScore = (props) => {
  console.log(props.score);
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Correct Answers</span>
        <span>{Number(props.score)}/5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FinalScore;
