import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

const issuerLogos: Record<string, string> = {
  Google: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
  HackerRank: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
  Kaggle: 'https://www.kaggle.com/static/images/site-logo.svg',
};

export default function Certifications() {
  const { certifications } = resumeData;

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
            Certifications
          </h2>
          <div className="h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => {
            const logoSrc = issuerLogos[cert.issuer] ?? '';
            const hasVerifyLink = Boolean(cert.url);

            return (
              <motion.article
                key={`${cert.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition-colors hover:bg-white md:p-5 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-white p-1.5 dark:border-white/10 dark:bg-slate-900">
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={`${cert.issuer} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                        {cert.issuer.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
                  </div>
                </div>

                <h3 className="mb-3 text-base font-bold text-slate-900 dark:text-white md:text-lg">
                  {cert.name}
                </h3>

                {hasVerifyLink && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/15 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
