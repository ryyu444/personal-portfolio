import Hero from './_components/(content)/hero/Hero';
import About from './_components/(content)/about/About';
import Projects from './_components/(content)/projects/Projects';
import Contact from './_components/(content)/contact/Contact';

/* 
    Base components of the site
    - Hero
    - About
    - Projects
    - Contact
*/

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
