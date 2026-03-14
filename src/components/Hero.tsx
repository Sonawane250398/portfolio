import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  const { name, title, subtitle, summary, links, openTo } = resumeData.basics;

  const stats = [
    { metric: "20%", label: "fewer reconciliation discrepancies" },
    { metric: "6–8 hrs", label: "manual reporting eliminated/week" },
    { metric: "0", label: "critical issues across 6 releases" },
    { metric: "4+", label: "years in financial data systems" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              {name}
            </h1>
            {/* Primary title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
              {title}
            </h2>
            {/* Subtitle / specialisation line */}
            <p className="text-base md:text-lg text-emerald-400 font-medium tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            {summary}
          </motion.p>

          {/* Key stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-2"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 flex flex-col gap-1"
              >
                <span className="text-2xl font-bold text-emerald-400">{s.metric}</span>
                <span className="text-xs text-slate-400 leading-snug">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#experience"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group"
            >
              View Experience
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex items-center gap-6 mt-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                {link.name === 'LinkedIn' ? <Linkedin className="w-5 h-5" /> : <Github className="w-5 h-5" />}
                <span className="text-sm font-medium">{link.name}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>

          {/* Open to roles */}
          {openTo && openTo.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-2 mt-2"
            >
              <span className="text-xs text-slate-500 uppercase tracking-widest font-medium mr-1">Open to</span>
              {openTo.map((role, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/10"
                >
                  {role}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

    
    </section>
  );
}