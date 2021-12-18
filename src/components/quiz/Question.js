import React from "react";
import classes from "./Question.module.css";
import QuestionOptions from "./QuestionOptions";

const Question = ({ countries }) => {
  return (
    <div className={classes.quiz}>
      <div className={classes.questionflag}>
        <img src={countries.image} alt={countries.correctAnswer} width="30" />
      </div>
      <div className={classes.options}>
        <h2 className={classes.heading}>Pick A Country</h2>
        <QuestionOptions countries={countries} />
      </div>
    </div>
  );
};

export default Question;
