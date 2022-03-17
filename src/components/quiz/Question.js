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
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  quiz: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  questionflag: {
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-1rem",
    },
    "& img": {
      width: "25rem",
      height: "18rem",
      [theme.breakpoints.down("md")]: {
        width: "23rem",
        height: "16rem",
      },
      [theme.breakpoints.down("sm")]: {
        width: "13rem",
        height: "8rem",
      },
    },
  },

  options: {
    width: "30rem",
    height: "20rem",
    padding: "1.8rem",
    background: "#fff",
    color: "black",
    border: "5px solid #000",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      height: "16.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "17rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0.1rem",
      height: "13.5rem",
    },
  },

  heading: {
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "-1.5rem",
    },
  },

  buttoncontainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2.3rem",
    },
  },

  questionbt: {
    "& button": {
      width: "8rem",
      height: "3rem",
      cursor: "pointer",
      border: "2px solid #555",
      transition: "0.5s",
      [theme.breakpoints.down("sm")]: {
        width: "7rem",
        height: "2.8rem",
      },
      [theme.breakpoints.down("xs")]: {
        width: "6.5rem",
        height: "2.3rem",
      },
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },
}));

const Question = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const ctxQuestions = useContext(QuestionsContext);
  const ctxCountries = useContext(CountriesContext);
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px
  const MQxs = useMediaQuery(theme.breakpoints.down("xs")); //400px

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
          {!MQxs ? (
            <Typography
              variant={MQxs ? "h6" : MQmd ? "h5" : "h4"}
              className={classes.heading}
            >
              Pick A Country
            </Typography>
          ) : null}

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
                size={MQsm ? "small" : MQmd ? "medium" : "large"}
                variant="contained"
                onClick={exitGameHandler}
              >
                Exit
              </Button>
            </Box>
            <Box className={classes.questionbt}>
              <Button
                size={MQsm ? "small" : MQmd ? "medium" : "large"}
                variant="contained"
                onClick={() => {
                  ctxQuestions.setOpen(true);
                }}
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
