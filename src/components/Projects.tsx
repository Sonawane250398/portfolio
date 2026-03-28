import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Code2, ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resume';

const expandTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

/** Logical size of the embedded Dash layout; scaled down to fit container without inner scrollbars. */
const DASHBOARD_EMBED_BASE_W = 1400;
const DASHBOARD_EMBED_BASE_H = 1000;
const DASHBOARD_EMBED_VIEWPORT_H = 700;

function LiveDashboardEmbed({
  src,
  title,
  loaded,
  onLoad,
}: {
  src: string;
  title: string;
  loaded: boolean;
  onLoad: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const s = Math.min(w / DASHBOARD_EMBED_BASE_W, DASHBOARD_EMBED_VIEWPORT_H / DASHBOARD_EMBED_BASE_H);
      setScale(s > 0 ? s : 1);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="dashboard-iframe relative h-[700px] w-full overflow-hidden rounded-[8px] bg-white dark:bg-slate-950"
    >
      {!loaded && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-[8px] bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          aria-live="polite"
        >
          Loading dashboard...
        </div>
      )}
      <iframe
        title={title}
        src={src}
        className="pointer-events-auto absolute left-0 top-0 border-0"
        style={{
          width: DASHBOARD_EMBED_BASE_W,
          height: DASHBOARD_EMBED_BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        onLoad={onLoad}
      />
    </div>
  );
}

export default function Projects() {
  const { projects } = resumeData;
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const [sqlOpenIndex, setSqlOpenIndex] = useState<number | null>(null);
  const [embedLoadedByIndex, setEmbedLoadedByIndex] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setSqlOpenIndex(null);
  }, [expandedCardIndex]);

  useEffect(() => {
    setEmbedLoadedByIndex((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        const idx = Number(key);
        if (expandedCardIndex !== idx) delete next[idx];
      }
      return next;
    });
  }, [expandedCardIndex]);

  return (
    <section className="relative z-10 px-4 py-24 min-[769px]:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-6">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-[769px]:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-emerald-500" />
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 min-[769px]:text-base md:text-lg">
            The projects below simulate real enterprise financial reporting workflows used in data pipelines,
            reconciliation systems, and audit-ready reporting environments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isCardExpanded = expandedCardIndex === index;
            const hasExpandable =
              Boolean(
                ('demoRows' in project && project.demoRows && project.demoRows.length > 0) ||
                  project.sqlSnippet ||
                  (project.links && project.links.length > 0),
              );

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              role={hasExpandable && !isCardExpanded ? 'button' : undefined}
              tabIndex={hasExpandable && !isCardExpanded ? 0 : undefined}
              onClick={
                hasExpandable
                  ? () =>
                      setExpandedCardIndex((prev) => (prev === index ? null : index))
                  : undefined
              }
              onKeyDown={
                hasExpandable && !isCardExpanded
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedCardIndex((prev) => (prev === index ? null : index));
                      }
                    }
                  : undefined
              }
              style={
                isCardExpanded
                  ? { boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)' }
                  : undefined
              }
              className={`group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 transition-all duration-300 hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:bg-white min-[769px]:p-8 dark:border-[rgba(255,255,255,0.05)] dark:bg-white/[0.02] dark:hover:border-[rgba(16,185,129,0.4)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] dark:hover:bg-white/[0.04] ${
                hasExpandable ? 'cursor-pointer' : ''
              } ${
                isCardExpanded && 'liveEmbedUrl' in project && project.liveEmbedUrl
                  ? 'z-[2] lg:col-span-2'
                  : ''
              }`}
            >
              {/* Header */}
              <div className="mb-6 flex flex-col gap-3 min-[769px]:flex-row min-[769px]:items-start min-[769px]:justify-between">
                <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
                  <FolderGit2 className="h-8 w-8" />
                </div>
                {isCardExpanded && project.links && project.links.length > 0 && (
                  <div
                    className="flex w-full flex-col gap-2 min-[769px]:w-auto min-[769px]:flex-row min-[769px]:justify-end"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-400/40 hover:text-emerald-600 min-[769px]:w-auto min-[769px]:min-h-0 min-[769px]:py-1.5 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-400"
                      >
                        <Github className="w-4 h-4 shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 min-[769px]:text-xl dark:text-white dark:group-hover:text-emerald-400">
                {project.title}
              </h3>

              {/* Bullets */}
              <div className="flex-grow">
                <ul className="mb-6 space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatePresence initial={false}>
                {isCardExpanded && (
                  <motion.div
                    key="project-expanded-extra"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={expandTransition}
                    className={
                      isCardExpanded && 'liveEmbedUrl' in project && project.liveEmbedUrl
                        ? 'overflow-visible'
                        : 'overflow-hidden'
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
              {'liveEmbedUrl' in project && project.liveEmbedUrl && (
                <div className="mb-6 min-w-0 w-full">
                  <a
                    href={project.liveEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mb-3 hidden min-h-11 min-[769px]:inline-flex items-center justify-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/15 dark:border-emerald-400/35 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:border-emerald-400/55 dark:hover:bg-emerald-400/10"
                  >
                    Open Full Dashboard →
                  </a>
                  <a
                    href={project.liveEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="dashboard-mobile-btn mb-3 min-h-11 w-full rounded-lg border border-emerald-500/50 bg-emerald-500/15 py-3 text-center text-sm font-semibold leading-none text-emerald-800 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/25 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-400/15"
                  >
                    Open Live Dashboard →
                  </a>
                  <div className="-mx-5 w-[calc(100%+2.5rem)] max-w-none min-[769px]:-mx-8 min-[769px]:w-[calc(100%+4rem)]">
                    <LiveDashboardEmbed
                      src={project.liveEmbedUrl}
                      title={`${project.title} — live dashboard`}
                      loaded={Boolean(embedLoadedByIndex[index])}
                      onLoad={() =>
                        setEmbedLoadedByIndex((prev) => ({ ...prev, [index]: true }))
                      }
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    First load may take 30–50 seconds to wake up (free hosting)
                  </p>
                </div>
              )}
              {/* Demo tables — distinct styling per project */}
              {'demoRows' in project && project.demoRows && project.demoRows.length > 0 && (
                <div className="project-demo-panel mb-6 min-w-0">
                  {'account' in project.demoRows[0] && (
                    <div className="overflow-x-auto rounded-xl border border-emerald-500/20 bg-slate-900 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Sample output
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-600">Demo</span>
                      </div>
                      <table className="w-full min-w-[640px] text-left text-xs">
                        <thead>
                          <tr className="border-b border-[0.5px] border-white/15">
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Account</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Source amount</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Reporting amount</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Variance</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Status</th>
                            <th className="pb-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">Severity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(project.demoRows as { account: string; source: string; reporting: string; variance: string; status: string; severity: string }[]).map((row, ri) => (
                            <tr key={ri} className="border-b border-[0.5px] border-white/10">
                              <td className="py-2.5 pr-3 font-mono text-slate-200">{row.account}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.source}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.reporting}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.variance}</td>
                              <td className="py-2.5 pr-3 font-mono">
                                <span
                                  className={
                                    row.status === 'MATCHED'
                                      ? 'text-emerald-400'
                                      : row.status === 'MISSING'
                                        ? 'text-red-400'
                                        : 'text-yellow-400'
                                  }
                                >
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-2.5 font-mono">
                                <span
                                  className={
                                    row.severity === 'CRITICAL'
                                      ? 'text-red-400'
                                      : row.severity === 'HIGH'
                                        ? 'text-orange-400'
                                        : row.severity === 'MEDIUM'
                                          ? 'text-yellow-400'
                                          : 'text-slate-500'
                                  }
                                >
                                  {row.severity}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {'check' in project.demoRows[0] && (
                    <div className="overflow-x-auto rounded-xl border border-emerald-500/25 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Pipeline checks
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-600">Demo</span>
                      </div>
                      <table className="w-full min-w-[700px] text-left text-xs">
                        <thead>
                          <tr className="border-b border-[0.5px] border-white/15">
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Check type</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Total</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Passed</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Failed</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Pass rate</th>
                            <th className="pb-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(project.demoRows as { check: string; total: number; passed: number; failed: number; passRate: string; status: string }[]).map((row, ri) => (
                            <tr key={ri} className="border-b border-[0.5px] border-white/10">
                              <td className="py-2.5 pr-3 text-sm font-medium text-slate-200">{row.check}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.total}</td>
                              <td className="py-2.5 pr-3 font-mono text-emerald-400/90">{row.passed}</td>
                              <td className="py-2.5 pr-3 font-mono text-red-400/90">{row.failed}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.passRate}</td>
                              <td className="py-2.5 font-mono">
                                <span className={row.status === 'PASS' ? 'text-emerald-400' : 'text-red-400 font-semibold'}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {'domain' in project.demoRows[0] && (
                    <div className="overflow-x-auto rounded-xl border border-sky-500/25 bg-slate-900 p-4">
                      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Control scorecard</span>
                        <span className="w-fit rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Demo
                        </span>
                      </div>
                      <table className="w-full min-w-[600px] text-left text-xs">
                        <thead>
                          <tr className="border-b border-[0.5px] border-white/15">
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Domain</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Total checks</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Passed</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Failed</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Pass rate</th>
                            <th className="pb-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(project.demoRows as { domain: string; totalChecks: number; passed: number; failed: number; passRate: string; risk: string }[]).map((row, ri) => (
                            <tr key={ri} className="border-b border-[0.5px] border-white/10">
                              <td className="py-2.5 pr-3 text-sm font-medium text-slate-200">{row.domain}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.totalChecks}</td>
                              <td className="py-2.5 pr-3 font-mono text-emerald-400/90">{row.passed}</td>
                              <td className="py-2.5 pr-3 font-mono text-red-400/90">{row.failed}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-300">{row.passRate}</td>
                              <td className="py-2.5 font-mono">
                                <span
                                  className={
                                    row.risk === 'LOW'
                                      ? 'text-emerald-400'
                                      : row.risk === 'HIGH'
                                        ? 'text-orange-400'
                                        : 'text-red-400 font-semibold'
                                  }
                                >
                                  {row.risk}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {'testId' in project.demoRows[0] && (
                    <div className="overflow-x-auto rounded-xl border border-amber-500/25 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded border border-white/10 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200/80">
                          Sample output
                        </span>
                      </div>
                      <table className="w-full min-w-[720px] text-left text-xs">
                        <thead>
                          <tr className="border-b border-[0.5px] border-white/15">
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Test ID</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Scenario</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Type</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Status</th>
                            <th className="pb-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">Severity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(project.demoRows as { testId: string; scenario: string; type: string; status: string; severity: string }[]).map((row, ri) => (
                            <tr key={ri} className="border-b border-[0.5px] border-white/10">
                              <td className="py-2.5 pr-3 font-mono text-slate-200">{row.testId}</td>
                              <td className="py-2.5 pr-3 text-slate-300">{row.scenario}</td>
                              <td className="py-2.5 pr-3 font-mono text-slate-500">{row.type}</td>
                              <td className="py-2.5 pr-3 font-mono">
                                <span
                                  className={
                                    row.status === 'PASS'
                                      ? 'text-emerald-400'
                                      : row.status === 'BLOCKED'
                                        ? 'text-orange-400'
                                        : 'text-red-400 font-semibold'
                                  }
                                >
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-2.5 font-mono text-slate-500">{row.severity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {'releaseReadiness' in project && project.releaseReadiness && (
                        <div className="mt-4 border-t border-[0.5px] border-white/10 pt-4">
                          <div className="mb-3 flex flex-wrap gap-2">
                            {[
                              { label: 'Total', value: project.releaseReadiness.total, mono: 'text-slate-200' },
                              { label: 'Passed', value: project.releaseReadiness.passed, mono: 'text-emerald-400' },
                              { label: 'Failed', value: project.releaseReadiness.failed, mono: 'text-red-400' },
                              { label: 'Blocked', value: project.releaseReadiness.blocked, mono: 'text-orange-400' },
                              { label: 'Score', value: project.releaseReadiness.score, mono: 'text-emerald-300' },
                            ].map((chip) => (
                              <span
                                key={chip.label}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-400"
                              >
                                <span className="uppercase tracking-wide">{chip.label}</span>
                                <span className={`font-mono text-xs font-semibold ${chip.mono}`}>{chip.value}</span>
                              </span>
                            ))}
                          </div>
                          <div className="rounded-lg border border-amber-500/35 bg-amber-500/10 px-4 py-3 text-center">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-200/70">Status</p>
                            <p className="mt-1 text-base font-bold tracking-tight text-amber-400 md:text-lg">
                              {project.releaseReadiness.status}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {'category' in project.demoRows[0] && (
                    <div className="overflow-x-auto rounded-xl border border-violet-500/25 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded border border-violet-400/20 bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200/80">
                          Demo
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-600">Traceability</span>
                      </div>
                      <table className="w-full min-w-[640px] text-left text-xs">
                        <thead>
                          <tr className="border-b border-[0.5px] border-white/15">
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Category</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Requirements</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Test cases</th>
                            <th className="pb-2.5 pr-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Covered</th>
                            <th className="pb-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">Coverage %</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(project.demoRows as { category: string; totalReqs: number; testCases: number; covered: number; coveragePct: string }[]).map((row, ri) => {
                            const pct = Math.min(100, Math.max(0, parseInt(row.coveragePct.replace(/\D/g, ''), 10) || 0));
                            return (
                              <tr key={ri} className="border-b border-[0.5px] border-white/10">
                                <td className="py-2.5 pr-3 text-sm font-medium text-slate-200">{row.category}</td>
                                <td className="py-2.5 pr-3 font-mono text-slate-300">{row.totalReqs}</td>
                                <td className="py-2.5 pr-3 font-mono text-slate-300">{row.testCases}</td>
                                <td className="py-2.5 pr-3 font-mono text-slate-300">{row.covered}</td>
                                <td className="py-2.5 min-w-[120px]">
                                  <div className="flex items-center gap-2">
                                    <div className="h-2 min-w-[72px] flex-1 overflow-hidden rounded-full bg-slate-800">
                                      <div
                                        className="h-full rounded-full bg-emerald-500 transition-[width]"
                                        style={{ width: `${pct}%` }}
                                      />
                                    </div>
                                    <span className="shrink-0 font-mono text-emerald-400">{row.coveragePct}</span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {'rtmSummary' in project && project.rtmSummary && (
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-[0.5px] border-white/10 pt-4">
                          {[
                            `${project.rtmSummary.totalReqs} Requirements`,
                            `${project.rtmSummary.coveragePct} Coverage`,
                            `${project.rtmSummary.sprints} Sprints`,
                            `${project.rtmSummary.openDefects} Open Defects`,
                          ].map((label) => (
                            <span
                              key={label}
                              className="inline-flex rounded-full border border-white/10 bg-slate-950/90 px-3 py-1.5 text-[11px] font-mono text-slate-300"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* SQL Snippet toggle */}
              {project.sqlSnippet && (
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSqlOpenIndex((prev) => (prev === index ? null : index));
                    }}
                    className="mb-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500 min-[769px]:min-h-0 min-[769px]:px-0 min-[769px]:text-xs dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    <Code2 className="w-4 h-4" />
                    {sqlOpenIndex === index ? 'Hide SQL' : 'View SQL'}
                    {sqlOpenIndex === index ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {sqlOpenIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={expandTransition}
                        className="overflow-hidden"
                      >
                        <pre className="overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-900 p-4 font-mono text-sm leading-relaxed text-emerald-300 min-[769px]:text-xs dark:border-white/10">
                          <code>{project.sqlSnippet}</code>
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stack tags */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-200/60 pt-6 dark:border-white/5">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium leading-tight text-emerald-700 min-[769px]:py-1 min-[769px]:text-xs dark:border-emerald-400/20 dark:text-emerald-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {hasExpandable &&
                (isCardExpanded ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCardIndex(null);
                    }}
                    className="mt-4 min-h-11 rounded-lg px-1 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    Collapse ↑
                  </button>
                ) : (
                  <p className="mt-4 flex min-h-11 items-center text-sm text-emerald-600/70 dark:text-emerald-400/60">
                    View Demo →
                  </p>
                ))}
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}