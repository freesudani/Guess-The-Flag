import React, { useState } from "react";
import classes from "./Question.module.css";
import QuestionOptions from "./QuestionOptions";
import { Link } from "react-router-dom";
import FinalScore from "../finalscore/FinalScore";

const Question = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  const AnsweredQuestion = (IsitCorrect) => {
    setHaveAnswered(true);

    if (IsitCorrect) {
      setScore(props.score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < 4) {
        setCurrentQuestion((PrevcurrentQuestion) => PrevcurrentQuestion + 1);
        setShowFinalScore(false);
        setShowScore(false);
      } else {
        setShowFinalScore(true);
        setShowScore(true);
      }
      setHaveAnswered(false);
    }, 500);
  };

  const showScoreHandler = () => {
    setShowFinalScore(true);
  };

  const hideScoreHandler = () => {
    setShowFinalScore(false);
    if (currentQuestion >= 4) {
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  if (!showFinalScore) {
    return (
      <div className={classes.quiz}>
        <div className={classes.questionflag}>
          <img src={props.countries[currentQuestion].image} alt="country" />
        </div>

        <div className={classes.options}>
          <h2 className={classes.heading}>Pick A Country</h2>

          {props.countries[currentQuestion].options.map((country, index) => {
            return (
              <QuestionOptions
                key={index}
                correctness={country[1]}
                country={country[0]}
                haveAnswered={haveAnswered}
                parentFunction={AnsweredQuestion}
                setScore={setScore}
              />
            );
          })}

          <div className={classes.buttoncontainer}>
            <Link to="/">
              <button className={classes.btn}>Exit</button>
            </Link>
            <button className={classes.btn} onClick={showScoreHandler}>
              Show Score
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (showFinalScore) {
    return <FinalScore onHide={hideScoreHandler} score={score} />;
  }
};

export default Question;
