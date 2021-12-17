import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackShadow = (props) => {
  return <div className={classes.backshadow} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackShadow />,
        document.getElementById("finalscore")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        document.getElementById("finalscore")
      )}
    </>
  );
};

export default Modal;
