import { motion } from 'motion/react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import EducationAbout from '../components/EducationAbout';

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
            I'm a Business Analyst who builds things instead of just documenting them. SQL frameworks, Python pipelines,
            Tableau dashboards -If the manual work exists, I automate it. 4+ years in financial reporting and reconciliation,
            now powered by AI tools that let me move faster than ever.
            <br />
            <br />
            Off the clock I'm chasing the next tool, the next device, the next better way to do things. That curiosity never
            really switches off - which is probably why the data problems I fix never make it to the stakeholder's desk.
            <br />
            Currently open to BA and BSA roles in fintech, banking, and enterprise SaaS.
          </p>
        </motion.div>
      </section>
      <Experience mode="static" />
      <Skills pageLayout />
      <EducationAbout />
    </>
  );
}
