/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-emerald-500/20 selection:text-emerald-900 dark:bg-transparent dark:text-slate-50 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-200">
      <div className="dark:opacity-100 opacity-30 transition-opacity duration-300">
        <AnimatedBackground />
      </div>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}
