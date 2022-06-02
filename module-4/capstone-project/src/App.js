import React from "react"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Color from "./pages/Color";
import Pattern from "./pages/Pattern";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/color" element={<Color />}/>
        <Route path="/pattern" element={<Pattern />}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
