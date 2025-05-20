
import ParticlesAnimation from "@/components/animation/particles"
import AboutMeSection from "@/components/modules/home/AboutMeSection";

import HeroSection from "@/components/modules/home/HeoSection"
import ProjectPage from "@/components/modules/project/page";
const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      <ParticlesAnimation />
      <HeroSection />
     <AboutMeSection/>
     <ProjectPage/>
    </main>
  );
};


export default HomePage