import React from "react"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { ApiContextProvider } from "./apiContext";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Color from "./pages/Color";
import Pattern from "./pages/Pattern";

function App() {
  return (
    <Router>
    <ApiContextProvider>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/color" element={<Color />}/>
        <Route path="/pattern" element={<Pattern />}/>
      </Routes>

      <Footer />
    </ApiContextProvider>
    </Router>
  );
}

export default App;
