import { techIcons } from "../data/techIcons";

const ProjectCard = ({ project: { id, title, url, technologies } }) => {
  return (
    <a key={id} href={url}>
      <div className="flex min-w-[150px] h-36">
        <span>{title}</span>
        <div className="flex">
          {technologies.map((tech) => {
            return (
              <div key={tech} className="p-1 rounded">
                {techIcons[tech]}
              </div>
            );
          })}
        </div>
      </div>
    </a>
  )
};

export default ProjectCard;
