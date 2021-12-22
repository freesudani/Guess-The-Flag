import React, { useEffect, useState } from "react";
import classes from "./QuestionOptions.module.css";

const QuestionOptions = ({
  country,
  haveAnswered,
  parentFunction,
  correctness,
  setScore,
  score,
}) => {
  const [myColor, setMyColor] = useState(classes.btn);

  const changeColor = () => {
    if (correctness) {
      setMyColor(classes.correctChoice);
      setScore(score + 1);
    } else {
      setMyColor(classes.uncorrectChoice);
    }
  };

  useEffect(() => {
    if (!haveAnswered) {
      setMyColor(classes.btn);
    }
  }, [haveAnswered]);

  return (
    <div className={classes.option}>
      <button
        className={myColor}
        onClick={() => {
          parentFunction(correctness);
          changeColor();
        }}
      >
        {country}
      </button>
    </div>
  );
};

export default QuestionOptions;
