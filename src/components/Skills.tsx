import { motion } from 'motion/react';

const toolGroups = [
  {
    title: 'Business Analysis',
    items: ['Requirements gathering', 'User stories & acceptance criteria', 'Traceability', 'Stakeholder alignment'],
  },
  {
    title: 'Testing & Delivery',
    items: ['UAT', 'Test scenario design', 'Defect documentation', 'Release readiness'],
  },
  {
    title: 'Reporting & Tools',
    items: ['SQL', 'Tableau', 'Excel', 'Jira', 'Confluence', 'Agile/Scrum'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Tools & Reporting Stack
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Tools I use to validate data, monitor exceptions, and deliver reliable financial reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {toolGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <h3 className="text-sm font-semibold text-white mb-3">{group.title}</h3>
              <ul className="space-y-1.5 text-sm text-slate-400">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
