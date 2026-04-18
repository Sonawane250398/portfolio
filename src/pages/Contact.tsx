import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

const EMAIL = 'yashsonawane25.work@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/yash-sonawane25';
const GITHUB = 'https://github.com/Sonawane250398';

const outlineBtn =
  'inline-flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-emerald-600/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-emerald-700 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10 sm:w-auto dark:border-emerald-500/60 dark:text-emerald-400 dark:hover:border-emerald-400';

const iconCircle =
  'inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-white/20 dark:text-slate-300 dark:hover:text-emerald-400';

export default function Contact() {
  return (
    <section className="relative z-10 flex flex-1 flex-col justify-center px-4 py-12 min-[769px]:px-6 lg:px-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto w-full max-w-2xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          What&apos;s Next?
        </p>
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-[769px]:text-4xl md:text-6xl">
          Get In Touch
        </h1>
        <p className="mb-10 text-sm leading-relaxed text-slate-600 dark:text-slate-300 min-[769px]:text-lg">
          If you&apos;re hiring for a BSA or Financial Systems Analyst role and need someone who catches reporting
          failures before they reach stakeholders - let&apos;s talk.
        </p>
        <div className="mb-10 flex flex-col flex-wrap items-stretch justify-center gap-4 sm:flex-row">
          <a href={`mailto:${EMAIL}`} className={outlineBtn}>
            Say Hello!
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
            View LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
            View GitHub
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={iconCircle} aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={iconCircle} aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${EMAIL}`} className={iconCircle} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
