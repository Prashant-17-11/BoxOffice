import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Starred from "./Routes/Starred";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

serviceWorkerRegistration.register();

ReactDOM.render(
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="starred" element={<Starred />}>
        </Route>
        <Route path="*" element={<>This is 404 page.</>}></Route> {/* '*' matches only no other routes match */}
      </Routes>
  </BrowserRouter>, // wrapping app component
  document.getElementById("root")
);
