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
    { name: 'Impact', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter text-white hover:text-emerald-400 transition-colors"
        >
          {name.split(' ').map(n => n[0]).join('')}<span className="text-emerald-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/10 px-4 py-2 rounded-lg transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-emerald-400 hover:text-slate-950 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/10 px-4 py-3 rounded-lg transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-xl bg-white text-slate-950 text-center font-semibold hover:bg-emerald-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}