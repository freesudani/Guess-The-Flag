import React, { useState } from "react";
import FinalScore from "./components/finalscore/FinalScore";
import Layout from "./components/layout/Layout";

function App() {
  const [showFinalScore, setShowFinalScore] = useState(false);

  const showScoreHandler = () => {
    setShowFinalScore(true);
  };

  const hideScoreHandler = () => {
    setShowFinalScore(false);
  };

  return (
    <>
      {showFinalScore && <FinalScore onClose={hideScoreHandler} />}
      <Layout />
    </>
  );
}

export default App;
