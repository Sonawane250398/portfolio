import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code2, Database, LineChart, Target, Layers, Wrench } from 'lucide-react';

type SkillsProps = {
  pageLayout?: boolean;
};

export default function Skills({ pageLayout }: SkillsProps) {
  const { skills } = resumeData;
  const icons = [
    <Code2 className="w-6 h-6 text-emerald-400" />,
    <LineChart className="w-6 h-6 text-blue-400" />,
    <Database className="w-6 h-6 text-purple-400" />,
    <Target className="w-6 h-6 text-amber-400" />,
    <Layers className="w-6 h-6 text-rose-400" />,
    <Wrench className="w-6 h-6 text-cyan-400" />,
  ];

  return (
    <section
      className={`relative z-10 px-6 py-24 lg:px-12 ${
        pageLayout
          ? 'bg-transparent'
          : 'bg-slate-200/40 backdrop-blur-sm dark:bg-slate-950/50'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className={`mb-16 py-3 ${pageLayout ? '' : 'text-center'}`}>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {pageLayout ? 'Skills' : 'Technical Skills & Data Stack'}
          </h2>
          <div className={`h-1 w-20 rounded-full bg-emerald-500 ${pageLayout ? '' : 'mx-auto'}`} />
        </div>
        <div
          className={
            pageLayout
              ? 'grid grid-cols-1 gap-8 md:grid-cols-2'
              : 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-200/80 bg-white/80 p-8 transition-all duration-300 hover:border-emerald-500/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-emerald-500/20 dark:hover:bg-white/[0.04]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:border-white/10 dark:bg-white/5">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="cursor-default rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-emerald-500/40 hover:bg-slate-100 hover:text-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-emerald-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}