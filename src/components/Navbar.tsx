import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { name } = resumeData.basics;

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Outcomes', href: '#achievements' },
    { name: 'About', href: '#about' },
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/[0.06] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] shrink-0">
            <span className="text-xs font-semibold tracking-tight text-slate-200">
              {name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <span className="hidden sm:inline text-xs text-slate-400 whitespace-nowrap">
            BA · Reporting & Controls
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors shrink-0"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.06]"
      >
        <div className="flex flex-col px-6 py-4 gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-slate-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 py-2.5 px-4 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold text-center hover:bg-sky-400 transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
