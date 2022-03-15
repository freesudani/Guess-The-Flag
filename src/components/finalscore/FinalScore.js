import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { QuestionsContext } from "../../store/questions-context";
import { CountriesContext } from "../../store/countries-context";
import { Fireworks } from "fireworks/lib/react";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  total: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    "& span": {
      marginBottom: "3rem",
      textTransform: "uppercase",
    },
  },

  actions: {
    textAlign: "center",
    "& button": {
      cursor: "pointer",
      border: "2px solid #555",
      transition: "0.5s",
      marginBottom: "1rem",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },

  betterluck: {
    textAlign: "center",
  },
});

const FinalScore = () => {
  const classes = useStyles();
  const ctxQuestions = useContext(QuestionsContext);
  const ctxCountries = useContext(CountriesContext);

  let fxProps = {
    count: 2,
    interval: 1500,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 2) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  let content;

  if (ctxCountries.score > 3) {
    content = (
      <Box>
        <Fireworks {...fxProps} />
        <Typography variant="h4" gutterBottom>
          Congrats
        </Typography>
      </Box>
    );
  }
  if (ctxCountries.score <= 3) {
    content = (
      <Box className={classes.betterluck}>
        <Typography variant="h4" gutterBottom>
          Better Luck Next Time...
        </Typography>
      </Box>
    );
  }

  const hideScoreHandler = () => {
    ctxQuestions.setOpen(false);
    if (ctxQuestions.currentQuestion >= 4) {
      ctxQuestions.setCurrentQuestion(0);
      ctxQuestions.handleClose();
      ctxCountries.fetchCountries();
    }
  };

  return (
    <Box
      component={motion.div}
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Modal>
        <Box className={classes.total}>
          <Typography variant="h5" gutterBottom>
            Total Correct Answers
          </Typography>
          <Typography variant="h5" gutterBottom>
            {ctxCountries.score}/5
          </Typography>
          {content}
        </Box>
        <Box className={classes.actions}>
          <Button size="large" variant="contained" onClick={hideScoreHandler}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FinalScore;
