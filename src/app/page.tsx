import AboutSection from "@/components/About/AboutSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/Hero/HeroSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
    </>
  );
}
