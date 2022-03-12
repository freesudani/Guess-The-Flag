import React from "react";
import transitionVariants from "../UI/TransitionVariant";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  aboutBox: {
    width: "30rem",
    height: "21.9rem",
    padding: "0.5rem",
    marginTop: "0.1rem",
    marginLeft: "24rem",
  },
});

const About = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      component={motion.div}
      className={classes.aboutBox}
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
        <Button
          size="large"
          variant="contained"
          style={{ marginLeft: "11rem", border: "2px solid #555" }}
          onClick={() => navigate("/quiz")}
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
};

export default About;
