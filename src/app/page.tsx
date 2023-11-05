import About from "./components/About";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='mx-auto py-4 px-12 md:px-20'>
        <HeroSection />
        <About />
        <ProjectSection /> 
        <EmailSection />
      </div>
    </main>
  );
}
