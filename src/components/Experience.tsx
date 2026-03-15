import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Building2 } from 'lucide-react';
import { resumeData } from '../data/resume';

const MAX_BULLETS = 3;

export default function Experience() {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const jobs = experience.slice(0, 2).map((job) => ({
    ...job,
    bullets: job.bullets.slice(0, MAX_BULLETS),
  }));

  return (
    <section id="experience" className="pt-24 pb-20 px-6 lg:px-12 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Experience
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Roles focused on financial reporting, reconciliation, and release-ready delivery.
          </p>
        </motion.div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-4 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl"
              >
                <div className="space-y-0.5">
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] shrink-0">
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-4 pb-4 pt-0 border-t border-white/[0.04]">
                  <ul className="space-y-1.5 mt-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-400 leading-snug"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
