import React, { useContext } from "react";
import QuestionOptions from "./QuestionOptions";
import FinalScore from "../finalscore/FinalScore";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { QuestionsContext } from "../../store/questions-context";
import { CountriesContext } from "../../store/countries-context";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  quiz: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionflag: {
    marginLeft: "5%",
    "& img": {
      width: "25rem",
      height: "18rem",
    },
  },

  options: {
    width: "30rem",
    padding: "1.8rem",
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
    marginTop: "2rem",
  },

  questionbt: {
    "& button": {
      width: "8rem",
      height: "3rem",
      cursor: "pointer",
      border: "2px solid #555",
      transition: "0.5s",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },
});

const Question = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const ctxQuestions = useContext(QuestionsContext);
  const ctxCountries = useContext(CountriesContext);

  const exitGameHandler = () => {
    navigate("/");
    ctxCountries.setScore(0);
  };

  if (!ctxQuestions.open) {
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
          <img
            src={ctxCountries.countries[ctxQuestions.currentQuestion].image}
            alt="country"
          />
        </Box>

        <Box className={classes.options}>
          <Typography variant="h4" className={classes.heading}>
            Pick A Country
          </Typography>

          {ctxCountries.countries[ctxQuestions.currentQuestion].options.map(
            (country, index) => {
              return (
                <QuestionOptions
                  key={index}
                  correctness={country[1]}
                  country={country[0]}
                />
              );
            }
          )}

          <Box className={classes.buttoncontainer}>
            <Box className={classes.questionbt}>
              <Button
                size="large"
                variant="contained"
                onClick={exitGameHandler}
              >
                Exit
              </Button>
            </Box>
            <Box className={classes.questionbt}>
              <Button
                size="large"
                variant="contained"
                onClick={ctxQuestions.showFinalScore}
              >
                Show Score
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  if (ctxQuestions.open) {
    return <FinalScore />;
  }
};

export default Question;
