import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';

export default function Hero() {
  const { name, title, subtitle, summary, links, openTo } = resumeData.basics;
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState(['0%', '6–8 hrs', '0', '0+']);

  const stats = [
    { metric: '20%', label: 'fewer reconciliation discrepancies' },
    { metric: '6–8 hrs', label: 'manual reporting eliminated/week' },
    { metric: '0', label: 'critical issues across 6 releases' },
    { metric: '4+', label: 'years in financial data systems' },
  ];

  const resumeUrl =
    'https://drive.google.com/file/d/11OrM51iCn21Uh6rPhRO9j55B_dPmCn7Y/view?usp=sharing';

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsInView) return;

    const duration = 1500;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      const p20 = Math.round(20 * eased);
      const p4 = Math.round(4 * eased);

      setAnimatedMetrics([
        `${p20}%`,
        '6–8 hrs',
        `${Math.round(0 * eased)}`,
        `${p4}+`,
      ]);

      if (t < 1) {
        requestAnimationFrame(frame);
      }
    };

    const rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [statsInView]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-20 min-[769px]:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-white min-[769px]:text-5xl md:text-7xl lg:text-8xl">
              {name}
            </h1>
            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 min-[769px]:text-2xl md:text-3xl">{title}</h2>
            <p className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400 min-[769px]:text-base md:text-lg">
              {subtitle.split('').map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.04, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 min-[769px]:text-lg md:text-xl"
          >
            {summary}
          </motion.p>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1 rounded-xl border border-slate-200/80 bg-white/70 px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]"
                style={{
                  boxShadow: '0 0 24px rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                }}
                initial={i === 1 ? { opacity: 0 } : undefined}
                animate={i === 1 ? { opacity: statsInView ? 1 : 0 } : undefined}
                transition={i === 1 ? { duration: 0.6, ease: 'easeOut' } : undefined}
              >
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {animatedMetrics[i] ?? s.metric}
                </span>
                <span className="text-sm leading-snug text-slate-500 dark:text-slate-400">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch gap-4 mt-4 w-full sm:w-auto"
          >
            <Link
              to="/about"
              className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-slate-800 min-[769px]:text-base dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
            >
              View Experience
              <span className="hero-arrow-pulse inline-flex">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-8 py-4 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] min-[769px]:text-base dark:border-emerald-500/35 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25 sm:w-auto"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <Mail className="w-4 h-4" />
              </motion.span>
              Get in Touch
            </Link>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-shimmer-btn group flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-8 py-4 text-sm text-slate-800 transition-colors hover:bg-slate-200 min-[769px]:text-base dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 flex flex-wrap items-center gap-4 min-[769px]:gap-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 items-center gap-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.name === 'LinkedIn' ? <Linkedin className="w-5 h-5" /> : <Github className="w-5 h-5" />}
                <span className="text-sm font-medium">{link.name}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>

          {openTo && openTo.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-2 mt-2"
            >
              <span className="mr-1 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-500">
                Open to
              </span>
              {openTo.map((role, i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
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
