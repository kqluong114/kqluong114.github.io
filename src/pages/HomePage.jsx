import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AboutMeSection from "../components/AboutMeSection";

function Home() {
  return (
    <div className="flex flex-col gap-3">
      <ProfileSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
export default Home;
