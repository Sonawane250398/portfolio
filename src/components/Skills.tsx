import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code2, Database, LineChart, Target, Layers, Wrench } from 'lucide-react';

export default function Skills() {
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
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10 bg-slate-950/50 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
