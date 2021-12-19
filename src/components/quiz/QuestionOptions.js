import React from "react";
import classes from "./QuestionOptions.module.css";

const QuestionOptions = ({ country }) => {
  return (
    <div className={classes.move}>
      <button className={classes.btn}>{country}</button>
    </div>
  );
};

export default QuestionOptions;
