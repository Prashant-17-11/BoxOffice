import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./Routes/Home";
import Starred from "./Routes/Starred";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="starred" element={<Starred />}>
        </Route>
        <Route path="*" element={<>This is 404 page.</>}></Route> {/* '*' matches only no other routes match */}
     </Routes>
  
    </div>
  );
}

export default App;
