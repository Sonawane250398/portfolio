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

export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 mb-20"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              About
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
              Business Analyst with 4+ years of experience in financial reporting, reconciliation, UAT, and reporting controls, focused on making reporting more reliable, traceable, and release-ready.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase mb-3">
              Strengths
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Financial reporting and reconciliation across source-to-report workflows.</li>
              <li>UAT and release readiness for reporting enhancements and controls changes.</li>
              <li>Requirements and stakeholder alignment with clear, testable business rules.</li>
            </ul>
          </div>
        </motion.div>

        <div id="capabilities" className="space-y-5">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-5"
              >
                <h4 className="text-base font-semibold text-white mb-2">{cap.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
