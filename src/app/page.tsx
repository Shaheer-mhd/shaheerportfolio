import AboutSection from "@/components/About/AboutSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/Hero/HeroSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import Socials from "@/components/Socials/Socials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <Socials />
    </>
  );
}
