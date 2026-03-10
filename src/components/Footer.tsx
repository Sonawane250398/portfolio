import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { name, email, phone, links } = resumeData.basics;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white">
            {name}
          </h2>
          <p className="text-slate-400 text-sm">
            Building scalable data solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">{email}</span>
          </a>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">{phone}</span>
          </a>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {link.name === 'LinkedIn' ? <Linkedin className="w-5 h-5" /> : <Github className="w-5 h-5" />}
              <span className="text-sm font-medium hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-xs"
      >
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
