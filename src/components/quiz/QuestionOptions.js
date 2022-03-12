import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  option: {
    width: "70%",
    height: "2.5rem",
    margin: "0.5rem auto",
  },
  btn: {
    width: "100%",
    color: "#000",
    height: "2rem",
    marginTop: "0.5rem",
    borderRadius: "05%",
    backgroundColor: "transparent",
    border: "2px solid #555",
    cursor: "pointer",
    transition: "0.5s",
    "&:active": {
      transform: "translateY(3px)",
      boxShadow: "0 1px #000",
    },
  },

  correctChoice: {
    width: "18rem",
    height: "2rem",
    marginTop: "0.5rem",
    borderRadius: "05%",
    backgroundColor: "green",
    border: "1px solid #555",
    cursor: "pointer",
    transition: "0.5s",
    "&:active": {
      transform: "translateY(3px)",
      boxShadow: "0 1px #000",
    },
  },

  uncorrectChoice: {
    width: "18rem",
    height: "2rem",
    marginTop: "0.5rem",
    borderRadius: "05%",
    backgroundColor: "red",
    border: "1px solid #555",
    cursor: "pointer",
    transition: "0.5s",
    "&:active": {
      transform: "translateY(3px)",
      boxShadow: "0 1px #000",
    },
  },
});

const QuestionOptions = ({
  country,
  haveAnswered,
  parentFunction,
  correctness,
  setScore,
  score,
}) => {
  const classes = useStyles();
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
    <Box className={classes.option}>
      <Button
        className={myColor}
        variant="contained"
        onClick={() => {
          parentFunction(correctness);
          changeColor();
        }}
      >
        {country}
      </Button>
    </Box>
  );
};

export default QuestionOptions;
