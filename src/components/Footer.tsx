import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { name, email, phone, links } = resumeData.basics;

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/90 px-4 py-12 backdrop-blur-md min-[769px]:px-6 dark:border-white/10 dark:bg-slate-950/80 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 md:items-start"
        >
          <h2 className="text-xl font-bold tracking-tighter text-slate-900 min-[769px]:text-2xl dark:text-white">
            {name}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Finding the breaks before they reach reporting.
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
            className="flex min-h-11 items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600 min-[769px]:min-h-0 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <Mail className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium hidden sm:inline">{email}</span>
          </a>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="flex min-h-11 items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600 min-[769px]:min-h-0 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium hidden sm:inline">{phone}</span>
          </a>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600 min-[769px]:min-h-0 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              {link.name === 'LinkedIn' ? <Linkedin className="h-5 w-5 shrink-0" /> : <Github className="h-5 w-5 shrink-0" />}
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
        className="mx-auto mt-12 max-w-5xl border-t border-slate-200/80 pt-8 text-center text-sm text-slate-500 dark:border-white/5 min-[769px]:text-xs"
      >
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
