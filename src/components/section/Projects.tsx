// Display a list of ProjectsCards
import { projects } from "../../data/projects";
import type { Project } from "../../types/project.type";
import ProjectCard from "../cards/ProjectCard";

function Projects() {
  return (
    <div className="grid auto-rows-min grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5">
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export default Projects;
