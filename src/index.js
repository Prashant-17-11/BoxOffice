import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

serviceWorkerRegistration.register();

ReactDOM.render(
  <HashRouter>
  <App />
  </HashRouter>, // wrapping app component
  document.getElementById("root")
);
