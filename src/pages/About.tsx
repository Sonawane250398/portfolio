import { motion } from 'motion/react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import EducationAbout from '../components/EducationAbout';
import Certifications from '../components/Certifications';

export default function About() {
  return (
    <>
      <div className="h-24" aria-hidden />
      <section className="relative z-10 px-4 pb-8 pt-8 min-[769px]:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-[769px]:text-4xl md:text-5xl">
            About me
          </h1>
          <p className="mb-6 max-w-3xl text-sm text-slate-600 dark:text-slate-400 min-[769px]:text-lg">
            Fixing data problems before they become someone else's emergency.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 min-[769px]:text-lg">
            I find the reconciliation breaks that don't surface until month-end, then build the controls that catch them at the
            source. 4+ years across financial reporting systems, SQL reconciliation frameworks, and UAT pipelines. Started as
            a Data Analyst. Became a BA. Never stopped doing both.
            <br />
            <br />
            SQL frameworks, Python pipelines, Tableau dashboards — if the manual work exists, I automate it. The work that
            matters is upstream: validating data before it moves, not explaining why it's wrong after it lands on a
            stakeholder's desk.
            <br />
            <br />
            Open to Business Analyst, Data Analyst, and Reporting Systems roles across fintech, SaaS, and operations-heavy teams.
          </p>
        </motion.div>
      </section>
      <Experience mode="static" />
      <Skills pageLayout />
      <EducationAbout />
      <Certifications />
    </>
  );
}
