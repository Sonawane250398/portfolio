import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Code2, ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Projects() {
  const { projects } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6" />
          <p className="text-slate-400 text-base md:text-lg max-w-2xl">
            The projects below simulate real enterprise financial reporting workflows used in data pipelines,
            reconciliation systems, and audit-ready reporting environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                {/* GitHub button */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/30 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              {/* Bullets */}
              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 leading-relaxed text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example Output (if present) */}
              {project.exampleOutput && (
                <div className="mb-6 rounded-xl bg-slate-900/80 border border-white/10 p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">Sample Output</p>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Source Amount</span>
                      <span className="text-slate-200">{project.exampleOutput.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Reporting Amount</span>
                      <span className="text-slate-200">{project.exampleOutput.reporting}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Variance</span>
                      <span className="text-amber-400 font-semibold">{project.exampleOutput.variance}</span>
                    </div>
                    <div className="border-t border-white/5 pt-2 mt-2 flex justify-between">
                      <span className="text-slate-400">Status</span>
                      <span className="text-red-400 font-semibold">{project.exampleOutput.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Severity</span>
                      <span className="text-red-400 font-semibold">{project.exampleOutput.severity}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SQL Snippet toggle */}
              {project.sqlSnippet && (
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors mb-2"
                  >
                    <Code2 className="w-4 h-4" />
                    {expandedIndex === index ? 'Hide SQL' : 'View SQL'}
                    {expandedIndex === index ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <pre className="rounded-xl bg-slate-900 border border-white/10 p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                          <code>{project.sqlSnippet}</code>
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20"
                  >
                    {tech}
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