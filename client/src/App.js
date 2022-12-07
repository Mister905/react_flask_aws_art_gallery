import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />

        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
