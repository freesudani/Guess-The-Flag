import React, { useState } from "react";
import QuestionOptions from "./QuestionOptions";
import FinalScore from "../finalscore/FinalScore";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  quiz: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionflag: {
    marginLeft: "3rem",
    "& img": {
      marginTop: "1rem",
      width: "25rem",
      height: "18rem",
    },
  },

  options: {
    width: "30rem",
    marginTop: "0.1rem",
    marginRight: "2rem",
    padding: "1.5rem",
    background: "#fff",
    color: "black",
    border: "5px solid #000",
    borderRadius: "10px",
  },

  heading: {
    width: "100%",
    textAlign: "center",
  },

  buttoncontainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "1rem",
  },

  btn: {
    width: "8rem",
    height: "3rem",
    marginTop: "1rem",
    borderRadius: "10%",
    border: "2px solid #555",
    cursor: "pointer",
    transition: "0.5s",
    "&:active": {
      transform: "translateY(3px)",
      boxShadow: "0 1px #000",
    },
  },
});

const Question = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const AnsweredQuestion = () => {
    setHaveAnswered(true);

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
      props.onFetch();
    }
  };

  if (!showFinalScore) {
    return (
      <Box
        component={motion.div}
        className={classes.quiz}
        variants={transitionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box className={classes.questionflag}>
          <img src={props.countries[currentQuestion].image} alt="country" />
        </Box>

        <Box className={classes.options}>
          <Typography variant="h4" className={classes.heading}>
            Pick A Country
          </Typography>

          {props.countries[currentQuestion].options.map((country, index) => {
            return (
              <QuestionOptions
                key={index}
                correctness={country[1]}
                country={country[0]}
                haveAnswered={haveAnswered}
                parentFunction={AnsweredQuestion}
                setScore={props.setScore}
                score={props.score}
              />
            );
          })}

          <Box className={classes.buttoncontainer}>
            <Button
              size="large"
              variant="contained"
              className={classes.btn}
              onClick={() => navigate("/")}
            >
              Exit
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.btn}
              onClick={showScoreHandler}
            >
              Show Score
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  if (showFinalScore) {
    return <FinalScore onHide={hideScoreHandler} score={props.score} />;
  }
};

export default Question;
