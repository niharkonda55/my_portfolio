import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#121212] text-white font-sans">
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
