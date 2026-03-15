import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Education & Credentials
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Academic background and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-slate-500" />
              <h3 className="text-base font-semibold text-white">Academic Background</h3>
            </div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="pl-6 border-l border-white/[0.06]"
              >
                <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                <p className="text-slate-400 text-sm mt-0.5">{edu.institution}</p>
                <p className="text-slate-500 text-xs mt-1">{edu.dates} · {edu.location}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-slate-500" />
              <h3 className="text-base font-semibold text-white">Certifications</h3>
            </div>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-sm text-slate-400"
              >
                {cert.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
