
import ParticlesAnimation from "@/components/animation/particles"
import AboutMeSection from "@/components/modules/home/AboutUs";
import HeroSection from "@/components/modules/home/HeoSection"
const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      <ParticlesAnimation />
      <HeroSection />
     <AboutMeSection/>
    </main>
  );
};


export default HomePage