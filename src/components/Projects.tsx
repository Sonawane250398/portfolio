import { motion } from 'motion/react';

const caseStudies = [
  {
    title: 'Source-to-Report Financial Reconciliation Platform',
    problem: 'Reporting mismatches across source, transformed, and reporting-layer datasets.',
    built: 'SQL-based reconciliation workflow with validation checkpoints, exception outputs, and reconciliation summaries.',
    impact: 'Improved reporting accuracy by catching missing records, duplicates, mapping errors, and balance variances before final reporting.',
    tools: 'SQL, reconciliation logic, reporting validation',
  },
  {
    title: 'Financial Reporting UAT and Release Readiness Framework',
    problem: 'Reporting enhancements needed stronger test coverage, traceability, and release confidence.',
    built: 'Structured UAT framework with requirements, user stories, acceptance criteria, test cases, defect tracking, and release checkpoints.',
    impact: 'Improved test coverage, requirement traceability, and deployment readiness across reporting workflows.',
    tools: 'UAT, Jira, documentation, release validation',
  },
  {
    title: 'Financial Reporting Controls Monitoring Model',
    problem: 'Reporting exceptions across revenue, P&L, inventory, expenses, and payroll needed consistent monitoring.',
    built: 'SQL-based controls layer with standardized variance checks and exception monitoring.',
    impact: 'Improved reporting integrity and control visibility across multiple financial domains.',
    tools: 'SQL, controls monitoring, variance analysis',
  },
];

const labelClass = "text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Selected Case Studies
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            How I apply SQL, UAT, and reporting controls to improve financial reporting outcomes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
            >
              <h3 className="text-lg font-semibold text-white mb-6">{cs.title}</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className={labelClass + " mb-0.5"}>Problem</dt>
                  <dd className="text-slate-300 leading-relaxed">{cs.problem}</dd>
                </div>
                <div>
                  <dt className={labelClass + " mb-0.5"}>Built</dt>
                  <dd className="text-slate-300 leading-relaxed">{cs.built}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className={labelClass + " mb-0.5"}>Impact</dt>
                  <dd className="text-slate-300 leading-relaxed">{cs.impact}</dd>
                </div>
                <div>
                  <dt className={labelClass + " mb-0.5"}>Tools</dt>
                  <dd className="text-slate-500 text-[13px]">{cs.tools}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
