import React from "react";
import classes from "./Question.module.css";
import QuestionOptions from "./QuestionOptions";
import { Link } from "react-router-dom";

const Question = ({ countries }) => {
  return (
    <div className={classes.quiz}>
      <div className={classes.questionflag}>
        <img src={countries.image} alt={countries.correctAnswer} width="30" />
      </div>
      <div className={classes.options}>
        <h2 className={classes.heading}>Pick A Country</h2>

        {countries.options.map((country, index) => {
          return <QuestionOptions key={index} country={country} />;
        })}

        <div className={classes.buttoncontainer}>
          <Link to="/">
            <button className={classes.btn}>Exit</button>
          </Link>
          <button className={classes.btn}>Show Score</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
