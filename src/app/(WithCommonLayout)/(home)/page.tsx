
import ParticlesAnimation from "@/components/animation/particles"
import AboutMeSection from "@/components/modules/home/AboutMeSection";
import HeroSection from "@/components/modules/home/HeoSection"
import AllProject from "../project/page";
import Skillpage from "@/components/modules/home/Skill/skill";


const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      {/* <ParticlesAnimation /> */}
      <HeroSection />
       <AboutMeSection/>
      <AllProject/>
      <Skillpage/>
    </main>
  );
};


export default HomePage;