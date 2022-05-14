import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ThemeContextProvider } from "./themeContext"

export default function App(props) {
  return (
    <>
    <ThemeContextProvider>
        <Nav />
        <Main />
        <Footer />
    </ThemeContextProvider>
    </>
  );
}

