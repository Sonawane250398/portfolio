import { motion } from 'motion/react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Research() {
  const { research } = resumeData as typeof resumeData & {
    research: {
      title: string;
      publisher: string;
      date: string;
      badge: string;
      description: string;
      links: { label: string; url: string }[];
    }[];
  };

  if (!research?.length) return null;

  return (
    <section className="relative z-10 px-4 py-24 min-[769px]:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-[769px]:text-4xl md:text-5xl">
            Research
          </h2>
          <div className="h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="flex flex-col gap-6">
          {research.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 transition-colors hover:bg-white md:p-7 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
            >
              {/* Header row */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {item.publisher}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <BookOpen className="h-3 w-3" />
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold leading-snug text-slate-900 dark:text-white md:text-lg">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                {item.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
