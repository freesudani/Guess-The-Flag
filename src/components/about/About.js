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
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "30rem",
    height: "21.9rem",
    padding: "0.5rem",
    margin: "auto",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      height: "18.5rem",
      padding: "0.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
      padding: "0.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22rem",
      height: "22rem",
    },

    [theme.breakpoints.down("galaxys9")]: {
      marginTop: "6.5rem",
      marginLeft: "-1.3rem",
      height: "20rem",
    },

    [theme.breakpoints.down("mobile")]: {
      width: "14rem",
      height: "22rem",
      marginLeft: "-0.42rem",
    },
  },

  instractions: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.2rem",
    },
    [theme.breakpoints.down("mobile")]: {
      marginTop: "0rem",
    },
  },
  instraction: {
    display: "block",
  },

  startbt: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("mobile")]: {
      position: "absolute",
      bottom: "0.5rem",
      left: "8rem",
    },
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
}));

const About = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQxs = useMediaQuery(theme.breakpoints.down("xs")); //400px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //260px

  const startTheGameHandler = () => {
    navigate("/quiz");
  };

  return (
    <Card
      component={motion.div}
      className={classes.about}
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
    >
      <CardContent>
        <Typography
          variant={MQmb ? "subtitle1" : MQxs ? "h6" : MQmd ? "h5" : "h4"}
          align="center"
          gutterBottom={MQmb ? "false" : "true"}
        >
          World Flag Quiz Test
        </Typography>
        <Typography
          variant={MQmb ? "subtitle2" : MQxs ? "subtitle1" : MQmd ? "h6" : "h5"}
          align="center"
          gutterBottom={MQmb ? "false" : "true"}
        >
          Please Read Below Instructions
        </Typography>
        <Box className={classes.instractions}>
          <Typography
            variant={MQxs ? "caption" : MQmd ? "body2" : "body1"}
            align="left"
            gutterBottom={MQmb ? "false" : "true"}
            className={classes.instraction}
          >
            1. You will presented with 5 different flags
          </Typography>
          <Typography
            variant={MQxs ? "caption" : MQmd ? "body2" : "body1"}
            align="left"
            gutterBottom={MQmb ? "false" : "true"}
            className={classes.instraction}
          >
            2. Please choose the correct flag out of the options
          </Typography>
          <Typography
            variant={MQxs ? "caption" : MQmd ? "body2" : "body1"}
            align="left"
            gutterBottom={MQmb ? "false" : "true"}
            className={classes.instraction}
          >
            3. You can Exit the Quize at any stage
          </Typography>
          <Typography
            variant={MQxs ? "caption" : MQmd ? "body2" : "body1"}
            align="left"
            gutterBottom={MQmb ? "false" : "true"}
            className={classes.instraction}
          >
            4. Score above 4/5 and you get excellent grade.
          </Typography>
          <Typography
            variant={MQxs ? "caption" : MQmd ? "body2" : "body1"}
            align="left"
            gutterBottom={MQmb ? "false" : "true"}
            className={classes.instraction}
          >
            5. Score below 4/5 and you get poor grade.
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box className={classes.startbt}>
          <Button
            size={MQmb ? "small" : MQmd ? "medium" : "large"}
            variant="contained"
            onClick={startTheGameHandler}
          >
            Start
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default About;
