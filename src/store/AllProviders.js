import React from "react";
import CountriesProvider from "./countries-context";
import QuestionsProvider from "./questions-context";
import StyleProvider from "./theme-context";

const AllProviders = (props) => {
  return (
    <StyleProvider>
      <QuestionsProvider>
        <CountriesProvider>{props.children}</CountriesProvider>
      </QuestionsProvider>
    </StyleProvider>
  );
};

export default AllProviders;
