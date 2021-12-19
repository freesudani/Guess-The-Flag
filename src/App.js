import React, { useState, useEffect } from "react";
import FinalScore from "./components/finalscore/FinalScore";
import Layout from "./components/layout/Layout";
import Question from "./components/quiz/Question";
import About from "./components/about/About";
import { Route, Routes, useLocation } from "react-router-dom";

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
  const location = useLocation();
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
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<About />} />
          <Route path="/quiz" element={<Question countries={countries} />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
