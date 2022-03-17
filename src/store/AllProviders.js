import React from "react";
import CountriesProvider from "./countries-context";
import QuestionsProvider from "./questions-context";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const AllProviders = (props) => {
  return (
    <QuestionsProvider>
      <ThemeProvider theme={theme}>
        <CountriesProvider>{props.children}</CountriesProvider>
      </ThemeProvider>
    </QuestionsProvider>
  );
};

export default AllProviders;
