const TICKER_SKILLS = [
  'SQL',
  'Tableau',
  'Jira',
  'Confluence',
  'Advanced Excel',
  'UAT',
  'Agile',
  'Scrum',
  'ETL Validation',
  'Data Reconciliation',
  'Financial Reporting',
  'Requirements Gathering',
] as const;

export default function SkillsTicker() {
  const sequence = [...TICKER_SKILLS, ...TICKER_SKILLS];

  return (
    <section
      aria-label="Skills"
      className="relative z-10 w-full overflow-hidden border-y border-slate-200/70 bg-slate-100/95 px-4 py-5 min-[769px]:px-6 dark:border-white/10 dark:bg-slate-950/90"
    >
      <div className="skills-ticker-track gap-3 pr-3">
        {sequence.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 rounded-full border border-emerald-600/25 bg-emerald-500/15 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-800 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
