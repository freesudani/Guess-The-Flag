import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllProviders from "./store/AllProviders";

ReactDOM.render(
  <React.StrictMode>
    <AllProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
