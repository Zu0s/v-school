import React, { useContext } from "react"
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import { ApiContextProvider } from "./apiContext.js";

export default function App() {
  return (
    <div>
      <ApiContextProvider>
        <Nav />
        <Main />
      </ApiContextProvider>
      <Footer />
    </div>
  );
}


