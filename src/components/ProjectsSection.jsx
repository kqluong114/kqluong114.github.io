import { useEffect } from "react";
import projects from "../data/projects.json"
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  useEffect(() => {
    console.log(projects);
  }, [])
  return (
    <div>
      <span className="text-2xl">Projects</span>
      <div className="grid grid-cols-[repeat(auto-fit, minmax(300px, 1fr))] gap-4">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        {/* {projects.map((project) => <p>{project.id}</p>)} */}
      </div>
    </div>
  )
}

export default ProjectsSection;