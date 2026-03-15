/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import HowIWork from './components/HowIWork';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Prevent scrolling while splash is active
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30 selection:text-sky-100">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <AnimatedBackground />
      
      {!showSplash && (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Experience />
            <Projects />
            <Achievements />
            <About />
            <Skills />
            <HowIWork />
            <Education />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

