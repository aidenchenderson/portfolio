import NavBar from '@/components/navbar/navbar';
import HomePage from '../components/home/home';
import Experience from '@/components/experience/experience';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import About from '@/components/about/about';
import Links from '@/components/links/links';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main>
      <NavBar/>
      <HomePage/>
      <div id="experience">
        <Experience/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="about">
        <About/>
      </div>
    </main>
  );
}
