import React, { useState, useEffect, useCallback } from "react";
import Layout from "./components/layout/Layout";
import Question from "./components/quiz/Question";
import About from "./components/about/About";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);

  const fetchCountries = useCallback(async () => {
    setScore(0);
    let Random1 = Math.floor(Math.random() * 254);
    let Random2 = Math.floor(Math.random() * 254);
    let Random3 = Math.floor(Math.random() * 254);
    let Random4 = Math.floor(Math.random() * 254);

    let Random5 = Math.floor(Math.random() * 254);
    let Random6 = Math.floor(Math.random() * 254);
    let Random7 = Math.floor(Math.random() * 254);
    let Random8 = Math.floor(Math.random() * 254);

    let Random9 = Math.floor(Math.random() * 254);
    let Random10 = Math.floor(Math.random() * 254);
    let Random11 = Math.floor(Math.random() * 254);
    let Random12 = Math.floor(Math.random() * 254);

    let Random13 = Math.floor(Math.random() * 254);
    let Random14 = Math.floor(Math.random() * 254);
    let Random15 = Math.floor(Math.random() * 254);
    let Random16 = Math.floor(Math.random() * 254);

    let Random17 = Math.floor(Math.random() * 254);
    let Random18 = Math.floor(Math.random() * 254);
    let Random19 = Math.floor(Math.random() * 254);
    let Random20 = Math.floor(Math.random() * 254);

    try {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const data = await response.json();
      const dataArrays = Object.entries(data);
      let correctAnswer0 = `${dataArrays[Random1][1]}`;
      let correctAnswer1 = `${dataArrays[Random5][1]}`;
      let correctAnswer2 = `${dataArrays[Random9][1]}`;
      let correctAnswer3 = `${dataArrays[Random13][1]}`;
      let correctAnswer4 = `${dataArrays[Random17][1]}`;

      setCountries([
        {
          image: `https://flagcdn.com/${dataArrays[Random1][0]}.svg`,
          correctAnswer0,
          options: shuffle([
            [correctAnswer0, true],
            [`${dataArrays[Random2][1]}`, false],
            [`${dataArrays[Random3][1]}`, false],
            [`${dataArrays[Random4][1]}`, false],
          ]),
        },
        {
          image: `https://flagcdn.com/${dataArrays[Random5][0]}.svg`,
          correctAnswer1,
          options: shuffle([
            [correctAnswer1, true],
            [`${dataArrays[Random6][1]}`, false],
            [`${dataArrays[Random7][1]}`, false],
            [`${dataArrays[Random8][1]}`, false],
          ]),
        },
        {
          image: `https://flagcdn.com/${dataArrays[Random9][0]}.svg`,
          correctAnswer2,
          options: shuffle([
            [correctAnswer2, true],
            [`${dataArrays[Random10][1]}`, false],
            [`${dataArrays[Random11][1]}`, false],
            [`${dataArrays[Random12][1]}`, false],
          ]),
        },
        {
          image: `https://flagcdn.com/${dataArrays[Random13][0]}.svg`,
          correctAnswer3,
          options: shuffle([
            [correctAnswer3, true],
            [`${dataArrays[Random14][1]}`, false],
            [`${dataArrays[Random15][1]}`, false],
            [`${dataArrays[Random16][1]}`, false],
          ]),
        },
        {
          image: `https://flagcdn.com/${dataArrays[Random17][0]}.svg`,
          correctAnswer4,
          options: shuffle([
            [correctAnswer4, true],
            [`${dataArrays[Random18][1]}`, false],
            [`${dataArrays[Random19][1]}`, false],
            [`${dataArrays[Random20][1]}`, false],
          ]),
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  }, [location]);

  useEffect(() => {
    if (countries === []) {
      return;
    }
    fetchCountries();
  }, [fetchCountries]);

  console.log(countries);

  return (
    <Layout onFetch={fetchCountries}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<About />} />
          <Route
            path="/quiz"
            element={
              <Question
                countries={countries}
                score={score}
                setScore={setScore}
                onFetch={fetchCountries}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
