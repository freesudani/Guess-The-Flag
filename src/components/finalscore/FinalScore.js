import React from "react";
import Modal from "../UI/Modal";
import { motion } from "framer-motion";
import { Fireworks } from "fireworks/lib/react";
import finalScoreVariant from "../UI/FinalScoreVariant";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  total: {
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
      transition: "0.5s",
      "&:active": {
        transform: "translateY(3px)",
        boxShadow: "0 1px #000",
      },
    },
  },

  box: {
    height: "100vh",
  },
});

const FinalScore = (props) => {
  const classes = useStyles();

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

  if (props.score > 3) {
    content = (
      <Box>
        <Fireworks {...fxProps} />
        <Typography variant="h4" gutterBottom>
          Congrats
        </Typography>
      </Box>
    );
  }
  if (props.score <= 3) {
    content = (
      <Box>
        <Typography variant="h4" gutterBottom>
          Better Luck Next Time...
        </Typography>
      </Box>
    );
  }

  console.log(props.score);
  return (
    <Box
      className={classes.box}
      component={motion.div}
      variants={finalScoreVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Modal>
        <Box className={classes.total}>
          <Typography variant="h3" gutterBottom>
            Total Correct Answers
          </Typography>
          <Typography variant="h3" gutterBottom>
            {props.score}/5
          </Typography>
          {content}
        </Box>
        <Box className={classes.actions}>
          <Button size="large" variant="contained" onClick={props.onHide}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FinalScore;
