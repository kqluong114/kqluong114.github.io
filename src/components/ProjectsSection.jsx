import { useEffect } from "react";
import projects from "../data/projects.json"
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  useEffect(() => {
    console.log(projects);
  }, [])
  return (
    <section className="scroll-mt-16" id="projects" >
      <h1 className="text-3xl pb-6 font-semibold">Projects</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default ProjectsSection;