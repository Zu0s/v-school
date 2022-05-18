import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import { Link, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="App">
      <Nav />
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </main>
  );
}

