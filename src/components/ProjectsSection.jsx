import { useEffect } from "react";
import projects from "../data/projects.json"
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  useEffect(() => {
    console.log(projects);
  }, [])
  return (
    <section id="projects">
      <div className="py-6">
        <span className="text-3xl">Projects</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        {/* {projects.map((project) => <p>{project.id}</p>)} */}
      </div>
    </section>
  )
}

export default ProjectsSection;