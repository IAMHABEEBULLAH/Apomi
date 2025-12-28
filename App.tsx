
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-white', 'text-slate-900');
      document.body.classList.add('bg-[#0a0a0a]', 'text-slate-200');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#0a0a0a]', 'text-slate-200');
      document.body.classList.add('bg-white', 'text-slate-900');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/30">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
