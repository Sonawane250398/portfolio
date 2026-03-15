import { motion } from 'motion/react';
import { Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  const { name, links } = resumeData.basics;

  const chips = [
    "4+ Years Experience",
    "Financial Reporting",
    "UAT & Release Readiness",
  ];

  const kpis = [
    { label: "Reporting discrepancies", value: "20%↓" },
    { label: "Break investigation time", value: "30%↓" },
    { label: "Reporting cycle time", value: "2 days↓" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 lg:px-12 overflow-hidden scroll-mt-0"
    >
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 xl:gap-16 lg:items-start gap-10"
        >
          <div className="flex flex-col items-start gap-8 min-w-0">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500">
              Business Analyst · Financial Reporting & Controls
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {name}
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-slate-300">
                Business Analyst · Financial Reporting, Reconciliation & UAT
              </h2>
              <p className="text-slate-400 text-base max-w-xl leading-relaxed">
                Helping finance teams improve reporting accuracy, reduce discrepancies, and support release-ready systems through analysis, validation, and controls.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-300 text-sm border border-white/[0.06]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400 transition-colors"
                >
                  View Case Studies
                </a>
                <a
                  href="https://drive.google.com/file/d/1zu_mg474cROYei6JutU4z9pi0wDtER83/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-slate-200 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Resume
                  <Download className="w-4 h-4 ml-2 opacity-70" />
                </a>
              </div>
              <div className="flex items-center gap-5 text-slate-500 text-sm">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
                  >
                    {link.name === 'LinkedIn' ? <Linkedin className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[280px] rounded-xl border border-white/[0.06] bg-slate-900/40 p-5 self-center lg:self-start">
            <p className="text-[11px] font-medium tracking-widest uppercase text-slate-500 mb-3">
              Reporting snapshot
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="flex flex-col gap-0.5">
                  <span className="text-[11px] uppercase tracking-wide text-slate-500">{kpi.label}</span>
                  <span className="text-base font-semibold text-slate-200">{kpi.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
