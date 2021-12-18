import React, { useState, useEffect } from "react";
import FinalScore from "./components/finalscore/FinalScore";
import Layout from "./components/layout/Layout";
import Question from "./components/quiz/Question";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const App = () => {
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [countries, setCountries] = useState({
    image: "",
    correctAnswer: "",
    options: [],
  });

  const fetchCountries = async () => {
    let Random1 = Math.floor(Math.random() * 254);
    let Random2 = Math.floor(Math.random() * 254);
    let Random3 = Math.floor(Math.random() * 254);
    let Random4 = Math.floor(Math.random() * 254);

    try {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const data = await response.json();
      const dataArrays = Object.entries(data);
      let correctAnswer = `${dataArrays[Random1][1]}`;
      setCountries({
        image: `https://flagcdn.com/${dataArrays[Random1][0]}.svg`,
        correctAnswer,
        options: shuffle([
          correctAnswer,
          `${dataArrays[Random2][1]}`,
          `${dataArrays[Random3][1]}`,
          `${dataArrays[Random4][1]}`,
        ]),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (countries === []) {
      return;
    }

    fetchCountries();
  }, []);

  console.log(countries);

  const showScoreHandler = () => {
    setShowFinalScore(true);
  };

  const hideScoreHandler = () => {
    setShowFinalScore(false);
  };

  return (
    <>
      {showFinalScore && <FinalScore onClose={hideScoreHandler} />}
      <Layout>
        <Question countries={countries} />
      </Layout>
    </>
  );
};

export default App;
