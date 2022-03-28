import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Main />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
