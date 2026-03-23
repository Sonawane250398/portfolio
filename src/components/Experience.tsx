import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Building2 } from 'lucide-react';
import { resumeData } from '../data/resume';

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightMetrics(bullet: string) {
  const escaped = escapeHtml(bullet);
  const metricRe =
    /\d+%|\d+–\d+(?:\s*(?:hrs?|hours?))?|\d+\s+consecutive(?:\s+releases)?|\bzero\b|\d+\s+days?|\d+\s+KPIs?|\d+\s+financial|\d+\s+product|\d+\s+stakeholder|\d+\s+groups?/gi;
  return escaped.replace(metricRe, (m) => {
    return `<span class="text-emerald-400 font-semibold bg-emerald-400/10 px-1 rounded">${m}</span>`;
  });
}

type ExperienceProps = {
  mode?: 'accordion' | 'static';
};

export default function Experience({ mode = 'accordion' }: ExperienceProps) {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const isStatic = mode === 'static';

  return (
    <section className="relative z-10 px-6 py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className="z-10 mb-16 bg-slate-950/80 py-3 backdrop-blur-xl">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Experience
          </h2>
          <div className="h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="space-y-6">
          {experience.map((job, index) => {
            const expanded = isStatic || expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  expanded
                    ? 'border-emerald-500/40 bg-white shadow-[0_0_30px_rgba(16,185,129,0.12)] dark:border-emerald-500/30 dark:bg-white/5 dark:shadow-[0_0_30px_rgba(16,185,129,0.1)]'
                    : 'border-slate-200/80 bg-white/80 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]'
                }`}
              >
                {isStatic ? (
                  <div className="p-6 sm:p-8">
                    <div className="mb-8 space-y-2">
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {job.dates}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 leading-relaxed text-slate-600 dark:text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span dangerouslySetInnerHTML={{ __html: highlightMetrics(bullet) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex w-full flex-col gap-4 p-6 text-left focus:outline-none sm:flex-row sm:items-center sm:justify-between sm:p-8"
                    >
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                          {job.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                            <Building2 className="w-4 h-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {job.dates}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                        <ChevronDown
                          className={`h-5 w-5 text-slate-500 transition-transform duration-300 dark:text-slate-400 ${
                            expanded ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expanded ? 'auto' : 0,
                        opacity: expanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200/80 p-6 pt-0 dark:border-white/5 sm:p-8">
                        <ul className="mt-6 space-y-4">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-4 leading-relaxed text-slate-600 dark:text-slate-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              <span dangerouslySetInnerHTML={{ __html: highlightMetrics(bullet) }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
