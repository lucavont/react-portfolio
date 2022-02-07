import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import { homeObjOne, homeObjTwo } from "./components/InfoSection/Data";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <ProjectSection {...homeObjTwo} />
      <Footer />
    </div>
  );
}

export default App;
