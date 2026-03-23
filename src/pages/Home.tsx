import Hero from '../components/Hero';
import SkillsTicker from '../components/SkillsTicker';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import EducationAbout from '../components/EducationAbout';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsTicker />
      <div id="experience" className="scroll-mt-28 md:scroll-mt-32">
        <Experience />
      </div>
      <div id="projects" className="scroll-mt-28 md:scroll-mt-32">
        <Projects />
      </div>
      <div id="skills" className="scroll-mt-28 md:scroll-mt-32">
        <Skills pageLayout />
      </div>
      <div id="education" className="scroll-mt-28 md:scroll-mt-32">
        <EducationAbout />
      </div>
      <div id="contact" className="scroll-mt-28 md:scroll-mt-32">
        <Contact />
      </div>
    </>
  );
}
