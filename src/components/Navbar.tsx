import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { resumeData } from '../data/resume';

const inactiveNav =
  'text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 text-slate-600 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-400/10';

const activeNav =
  'text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 text-emerald-600 bg-emerald-500/15 nav-link-active-glow dark:text-emerald-400 dark:bg-emerald-400/10';

const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? activeNav : inactiveNav);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { name } = resumeData.basics;

  const resumeUrl =
    'https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const mobileInactive =
    'text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-slate-600 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-400/10';
  const mobileActive =
    'text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-emerald-600 bg-emerald-500/15 nav-link-active-glow dark:text-emerald-400 dark:bg-emerald-400/10';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/90 py-4 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-slate-900 hover:text-emerald-600 transition-colors shrink-0 dark:text-white dark:hover:text-emerald-400"
        >
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
          <span className="text-emerald-600 dark:text-emerald-400">.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-100/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" />
          Available for New Opportunities
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-1">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400 dark:hover:text-slate-950"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 transition-colors hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:text-white"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="overflow-hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-950/95"
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          <div className="mb-2 flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-100/80 px-3 py-2 text-xs font-medium uppercase tracking-wide text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" />
            Available for New Opportunities
          </div>
          <NavLink
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? mobileActive : mobileInactive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? mobileActive : mobileInactive)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? mobileActive : mobileInactive)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? mobileActive : mobileInactive)}
          >
            Contact
          </NavLink>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 block w-full rounded-xl bg-slate-900 py-3 text-center font-semibold text-white dark:bg-white dark:text-slate-950"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
