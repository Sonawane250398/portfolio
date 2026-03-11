import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function DataArchitecture() {
  const { architecture } = resumeData;

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {architecture.title}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6" />
          <p className="text-slate-400 text-base md:text-lg max-w-2xl">
            {architecture.description}
          </p>
        </motion.div>

        {/* Pipeline flow */}
        <div className="flex flex-col items-center gap-0 max-w-lg mx-auto">
          {architecture.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 px-8 py-5 flex flex-col gap-1 group">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-white font-semibold text-base group-hover:text-emerald-400 transition-colors">
                    {step.label}
                  </span>
                </div>
                <p className="text-slate-400 text-sm pl-9">{step.detail}</p>
              </div>
              {index < architecture.steps.length - 1 && (
                <div className="flex flex-col items-center py-2">
                  <div className="w-[1px] h-4 bg-emerald-500/40" />
                  <ArrowDown className="w-4 h-4 text-emerald-500/60" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}