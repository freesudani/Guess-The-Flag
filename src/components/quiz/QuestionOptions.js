import React from "react";
import classes from "./QuestionOptions.module.css";

const QuestionOptions = ({ countries }) => {
  return (
    <>
      <div className={classes.move}>
        {countries.options.map((country, index) => {
          return (
            <button className={classes.option} key={index}>
              {country}
            </button>
          );
        })}
      </div>
      <div className={classes.buttoncontainer}>
        <button className={classes.btn}>Exit</button>
        <button className={classes.btn}>Show Score</button>
      </div>
    </>
  );
};

export default QuestionOptions;
