import { createContext, useState } from "react";

export const QuestionsContext = createContext({
  currentQuestion: 0,
  haveAnswered: false,

  setCurrentQuestion: () => {},
  AnsweredQuestion: () => {},
  showScoreHandler: () => {},
  setOpen: () => {},
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

const QuestionsProvider = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [open, setOpen] = useState(false);

  const AnsweredQuestion = () => {
    setHaveAnswered(true);

    setTimeout(() => {
      if (currentQuestion < 4) {
        setCurrentQuestion((PrevcurrentQuestion) => PrevcurrentQuestion + 1);
        setOpen(false);
        setShowScore(false);
      } else {
        setOpen(true);
        setShowScore(true);
      }
      setHaveAnswered(false);
    }, 800);
  };

  const showScoreHandler = () => {
    setOpen(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contextValue = {
    currentQuestion: currentQuestion,
    haveAnswered: haveAnswered,
    setCurrentQuestion: setCurrentQuestion,
    AnsweredQuestion: AnsweredQuestion,
    showScoreHandler: showScoreHandler,
    setOpen: setOpen,
    open: open,
    handleOpen: handleOpen,
    handleClose: handleClose,
  };

  return (
    <QuestionsContext.Provider value={contextValue}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
