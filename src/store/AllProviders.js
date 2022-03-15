import React from "react";
import CountriesProvider from "./countries-context";
import QuestionsProvider from "./questions-context";

const AllProviders = (props) => {
  return (
    <QuestionsProvider>
      <CountriesProvider>{props.children}</CountriesProvider>
    </QuestionsProvider>
  );
};

export default AllProviders;
