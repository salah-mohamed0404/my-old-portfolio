import HeroSection from "./Sections/HeroSection";
import classes from "./Main.module.css";
import AboutSection from "./Sections/AboutSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsAndCertficates from "./Sections/SkillsAndCertficatesSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactUsSection from "./Sections/ContactUsSection";

function Main() {
  return (
    <main className={classes.main}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsAndCertficates />
      <ProjectsSection />
      <ContactUsSection />
    </main>
  );
}

export default Main;
