import { motion } from 'motion/react';

const steps = [
  {
    label: 'Understand reporting requirements',
    description: 'Clarify business rules, reporting expectations, and downstream consumers.',
  },
  {
    label: 'Validate data and test logic',
    description: 'Use SQL, scenarios, and controls to validate data and business logic.',
  },
  {
    label: 'Support release readiness',
    description: 'Coordinate UAT, track defects, and confirm reporting quality before go-live.',
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-16 px-6 lg:px-12 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            How I Work
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            A simple approach for improving reporting reliability and control.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                Step {index + 1}
              </span>
              <p className="text-sm font-semibold text-white mt-2 mb-1">{step.label}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
