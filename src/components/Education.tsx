import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const { education, certifications, extra } = resumeData;

  return (
    <section id="education" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Education & Certifications
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Academic Background</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10 group"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300" />
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-400 font-medium mt-1">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>{edu.dates}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm bg-white/5 p-4 rounded-xl border border-white/10">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Extra Column */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-4 group"
                  >
                    <Award className="w-6 h-6 text-slate-400 group-hover:text-blue-400 shrink-0 mt-1 transition-colors" />
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {cert.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extra */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Additional Info</h3>
              </div>

              <div className="space-y-4">
                {extra.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-4 group"
                  >
                    <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-purple-400 shrink-0 mt-1 transition-colors" />
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
