import React, { useEffect, useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { QuestionsContext } from "../../store/questions-context";
import { CountriesContext } from "../../store/countries-context";

const useStyles = makeStyles({
  optionBt: {
    width: "70%",
    height: "2.6rem",
    margin: "0.5rem auto",
    textAlign: "center",

    "& button": {
      width: "80%",
      color: "#fff",
      height: "2.5rem",
      marginTop: "0.5rem",
      borderRadius: "05%",
      border: "2px solid #555",
      cursor: "pointer",
      transition: "0.5s",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },

  optioncorrect: {
    width: "70%",
    height: "2.6rem",
    margin: "0.5rem auto",
    textAlign: "center",

    "& button": {
      width: "80%",
      color: "#fff",
      height: "2.5rem",
      marginTop: "0.5rem",
      borderRadius: "05%",
      border: "2px solid #555",
      cursor: "pointer",
      transition: "0.5s",
      backgroundColor: "green",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },

  optionuncorrect: {
    width: "70%",
    height: "2.6rem",
    color: "#fff",
    margin: "0.5rem auto",
    textAlign: "center",

    "& button": {
      width: "80%",
      color: "#fff",
      height: "2.5rem",
      marginTop: "0.5rem",
      borderRadius: "05%",
      border: "2px solid #555",
      cursor: "pointer",
      transition: "0.5s",
      backgroundColor: "red",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },
});

const QuestionOptions = ({ country, correctness }) => {
  const classes = useStyles();
  const [myColor, setMyColor] = useState(classes.optionBt);
  const ctxQuestions = useContext(QuestionsContext);
  const ctxCountries = useContext(CountriesContext);

  const changeColor = () => {
    if (correctness) {
      setMyColor(classes.optioncorrect);
      ctxCountries.setScore(ctxCountries.score + 1);
    } else {
      setMyColor(classes.optionuncorrect);
    }
  };

  useEffect(() => {
    if (!ctxQuestions.haveAnswered) {
      setMyColor(classes.optionBt);
    }
  }, [ctxQuestions.haveAnswered, classes.optionBt]);

  return (
    <Box className={myColor}>
      <Button
        variant="contained"
        onClick={() => {
          ctxQuestions.AnsweredQuestion(correctness);
          changeColor();
        }}
      >
        {country}
      </Button>
    </Box>
  );
};

export default QuestionOptions;
