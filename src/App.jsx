import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import SpecializingIn from "./components/Specializingin";
import RecentProjects from "./components/recentProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <SpecializingIn/>
      <RecentProjects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App; 
