import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
