import { motion } from 'motion/react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 leading-relaxed text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

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
