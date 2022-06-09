import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

serviceWorkerRegistration.register();

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, // wrapping app component
  document.getElementById("root")
);
