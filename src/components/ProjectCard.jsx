import techIcons from "../data/techIcons";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ project: { id, title, url, date, description, technologies } }) => {
  return (
    <a key={id} href={url}>
      <div className="flex flex-col bg-(--color-shade-400) rounded">
        <div className="flex gap-2 p-2 bg-shade-200 rounded">
          <div className="w-1/4 p-1">
            <BsGithub className="h-full m-auto w-full max-w-24"/>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg text-left text-ellipsis line-clamp-2">{title}</span>
            <span className={`${date ? "visible" : "invisible"}`}>{date ? date : "00-0000"}</span>
          </div>
        </div>
        <div className="line-clamp-2 overflow-ellipsis text-left hover:text-wrap hover:h-fit px-2 py-1">
          <span>
            {description}
          </span>
        </div>
        <div className="flex p-2 gap-2 align-middle">
          {technologies.map((tech) => {
            return (
              <div key={tech} className="flex p-1 rounded text-xs align-middle items-center bg-shade-300">
                <span>{tech}</span><div className="size-fit">{techIcons[tech]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  )
};

export default ProjectCard;
