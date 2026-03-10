import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Building2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Experience() {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                expandedIndex === index
                  ? 'bg-white/5 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]'
                  : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              {/* Header (Clickable) */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-300">
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
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Content (Expandable) */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 sm:p-8 pt-0 border-t border-white/5">
                  <ul className="space-y-4 mt-6">
                    {job.bullets.map((bullet, i) => {
                      // Highlight numbers/percentages
                      const highlightedBullet = bullet.replace(
                        /(\d+%|\d+–\d+|\d+)/g,
                        '<span class="text-emerald-400 font-semibold bg-emerald-400/10 px-1 rounded">$1</span>'
                      );

                      return (
                        <li key={i} className="flex items-start gap-4 text-slate-300 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                        </li>
                      );
                    })}
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
