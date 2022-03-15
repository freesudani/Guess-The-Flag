import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  about: {
    width: "30rem",
    height: "21.9rem",
    padding: "0.5rem",
    margin: "auto",
    borderRadius: "10px",
  },
  startbt: {
    margin: "auto",
    "& button": {
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

const About = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      component={motion.div}
      className={classes.about}
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
    >
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          World Flag Quiz Test
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Please Read Below Instructions
        </Typography>
        <Box>
          <Typography variant="body1" align="left" gutterBottom>
            1. You will presented with 5 different flags
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            2. Please choose the correct flag out of the options
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            3. You can Exit the Quize at any stage
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            4. Score above 4/5 and you get excellent grade.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            5. Score below 4/5 and you get poor grade.
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box className={classes.startbt}>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/quiz")}
          >
            Start
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default About;
