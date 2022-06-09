import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Routes/Home";
import Starred from "./Routes/Starred";
import Show from "./Routes/Show";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="starred" element={<Starred />}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
        <Route path="*" element={<>Error 404: Page not found</>}></Route>{" "}
        {/* '*' matches only no other routes match */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
