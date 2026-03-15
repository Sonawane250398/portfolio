import { motion } from 'motion/react';

const capabilities = [
  {
    title: 'Financial Reporting',
    description: 'Reconciliation, validation, and reporting controls across source-to-report workflows.',
  },
  {
    title: 'UAT & Release Readiness',
    description: 'Test scenarios, defect tracking, sign-off support, and deployment confidence.',
  },
  {
    title: 'Business Analysis',
    description: 'Requirements, traceability, stakeholder alignment, and business rule validation.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
            Capabilities
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            Focused on financial reporting outcomes, reconciliation quality, and release-ready reporting delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
              <p className="text-sm text-slate-300">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

