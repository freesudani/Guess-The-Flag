import React from "react";
import ReactDOM from "react-dom";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles((theme) => ({
  backshadow: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "20",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    border: "2px solid #000",
    borderRadius: "10px",
    zIndex: "30",
    [theme.breakpoints.down("galaxys9")]: {
      width: 350,
    },
  },
}));

const BackShadow = () => {
  const classes = useStyles();
  return <div className={classes.backshadow} />;
};

const ModalOverlay = (props) => {
  const classes = useStyles();
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackShadow />,
        document.getElementById("finalscore")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("finalscore")
      )}
    </>
  );
};

export default Modal;
