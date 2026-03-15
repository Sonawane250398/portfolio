import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { name, email, phone, links } = resumeData.basics;

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-slate-950/60 py-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center md:items-start gap-1 text-center md:text-left"
          >
            <h2 className="text-lg font-semibold tracking-tight text-white">{name}</h2>
            <p className="text-slate-500 text-sm max-w-sm">
              Business Analyst focused on reporting quality, reconciliation, and release-ready delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-slate-500"
          >
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 text-sm hover:text-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{email}</span>
            </a>
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 text-sm hover:text-slate-300 transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{phone}</span>
            </a>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:text-slate-300 transition-colors"
              >
                {link.name === 'LinkedIn' ? <Linkedin className="w-4 h-4 shrink-0" /> : <Github className="w-4 h-4 shrink-0" />}
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-white/[0.04] text-center text-slate-600 text-xs"
        >
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
