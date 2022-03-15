import React, { useEffect, useContext } from "react";
import Layout from "./components/layout/Layout";
import Question from "./components/quiz/Question";
import About from "./components/about/About";
import { CountriesContext } from "./store/countries-context";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const ctxCountries = useContext(CountriesContext);

  useEffect(() => {
    if (ctxCountries.countries === []) {
      return;
    }
    ctxCountries.fetchCountries();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout onFetch={ctxCountries.fetchCountries}>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<About />} />
          <Route
            path="/quiz"
            element={<Question onFetch={ctxCountries.fetchCountries} />}
          />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
};

export default App;
