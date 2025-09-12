import NavBar from '@/components/navbar/navbar';
import HomePage from '@/components/home/home';
import Experience from '@/components/experience/experience';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import About from '@/components/about/about';
import TopButton from '@/components/shared/topButton';
import Footer from '@/components/footer/footer';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // epic fake loading screen
  return (
    <main>
      <NavBar/>
      <TopButton/>
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
      <div>
        <Footer/>
      </div>
    </main>
  );
}
