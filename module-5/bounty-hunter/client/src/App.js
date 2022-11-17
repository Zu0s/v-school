import React from "react"
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import './style.css'

import { ApiContextProvider } from "./apiContext.js";

export default function App() {
  return (
    <div>
      <ApiContextProvider>
        <Nav />
        <Main />
      </ApiContextProvider>
    </div>
  );
}


