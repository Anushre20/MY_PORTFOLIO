import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingProfiles from "@/components/CodingProfiles";
import AcademicsSection from "@/components/AcademicsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <CodingProfiles />
    <AcademicsSection />
    <AchievementsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
);

export default Index;
