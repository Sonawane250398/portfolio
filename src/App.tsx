/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash is active
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <AnimatedBackground />
      
      {!showSplash && (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

