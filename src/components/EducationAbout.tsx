import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function EducationAbout() {
  const { education } = resumeData;

  return (
    <section className="relative z-10 px-6 py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Education
          </h2>
          <div className="h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="space-y-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academic background</h3>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
            >
              <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
              <p className="font-medium text-slate-600 dark:text-slate-300">{edu.institution}</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                {edu.dates}
                <span className="mx-2">·</span>
                {edu.location}
              </p>
              {edu.details && (
                <p className="mt-3 rounded-md border border-slate-200/60 bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-400">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
