/** @format */

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header"
import Simplify from "./components/Simplify/Simplify"
import Highquality from "./components/Highquality/Highquality"
import Plus from "./components/Plus/Plus";
import Practitioners from "./components/Practitioners/Practitioners";
import Education from "./components/Education/Education";
import Essentialservice from "./components/Essentialservice/Essentialservice";
import Wellness from "./components/Wellness/Wellness";
import React from "react";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Header />
    <Simplify />
    <Highquality />
    <Plus />
    < Practitioners />
    <Education />
    <Essentialservice />
    <Wellness />
    <Footer />
    </>
  );
}

export default App;
