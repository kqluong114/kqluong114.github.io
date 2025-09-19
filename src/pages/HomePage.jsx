import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AboutMeSection from "../components/AboutMeSection";
import { useRef } from "react";

function Home() {
  const profileRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div className="flex flex-col gap-3">
      <ProfileSection className="scroll-mt-16" ref={profileRef} />
      <AboutMeSection className="scroll-mt-16" ref={aboutMeRef} />
      <ProjectsSection className="scroll-mt-16" ref={projectsRef} />
      <ContactSection className="scroll-mt-16" ref={contactsRef} />
    </div>
  );
}

export default Home;
