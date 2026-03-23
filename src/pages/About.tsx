import { motion } from 'motion/react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import EducationAbout from '../components/EducationAbout';
import { resumeData } from '../data/resume';

export default function About() {
  const { summary } = resumeData.basics;

  return (
    <>
      <div className="h-24" aria-hidden />
      <section className="relative z-10 px-6 pb-8 pt-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            About me
          </h1>
          <p className="mb-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            I translate messy business requirements into clean, auditable reporting workflows.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">{summary}</p>
        </motion.div>
      </section>
      <Experience mode="static" />
      <Skills pageLayout />
      <EducationAbout />
    </>
  );
}
