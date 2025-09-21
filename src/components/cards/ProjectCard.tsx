// Informations regarding a project with the ability to view his github and a demo when available
import type { Project } from "../../types/project.type";
import React, { Suspense } from "react";
import Button from "../ui/Button";
import DemoIcon from "../icons/base-icons/DemoIcon";
import CssIcon from "../icons/tech-icons/CssIcon";
import CypressIcon from "../icons/tech-icons/CypressIcon";
import DockerIcon from "../icons/tech-icons/DockerIcon";
import ExpressIcon from "../icons/tech-icons/ExpressIcon";
import GithubIcon from "../icons/tech-icons/GithubIcon";
import HtmlIcon from "../icons/tech-icons/HtmlIcon";
import JavaScriptIcon from "../icons/tech-icons/JavaScriptIcon";
import JestIcon from "../icons/tech-icons/JestIcon";
import MySQLIcon from "../icons/tech-icons/MySQLIcon";
import NestJSIcon from "../icons/tech-icons/NestJSIcon";
import ReactIcon from "../icons/tech-icons/ReactIcon";
import TypeScriptIcon from "../icons/tech-icons/TypeScriptIcon";

const techIcons: Record<string, React.FC<{ className?: string }>> = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  Express: ExpressIcon,
  MySQL: MySQLIcon,
  Docker: DockerIcon,
  NestJS: NestJSIcon,
  Jest: JestIcon,
  Cypress: CypressIcon,
};

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, duration, role, teamSize, stack, screenshots, github, demo } = project;

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-bg-primary-1000 relative h-full w-full place-self-center overflow-hidden rounded-md shadow-sm transition hover:scale-[1.025] hover:shadow-md">
      <div>
        <img src={screenshots[0]} alt="" />
      </div>
      <div className="mb-[56px] flex flex-col gap-5 px-3 py-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-accent-500 text-[0.85rem]">
            {duration} hours - {role} - {teamSize > 1 ? `${teamSize} members` : "Solo"}
          </p>
        </div>
        <div>
          <p className="mb-2">{description}</p>
          <ul className="flex gap-3">
            {stack.map((tech) => {
              const Icon = techIcons[tech];

              return (
                <Suspense key={tech} fallback={<div className="h-6 w-6" />}>
                  <li>
                    <Icon className="h-6 w-6" />
                  </li>
                </Suspense>
              );
            })}
          </ul>
        </div>
        <div className="absolute right-0 bottom-3 left-0 flex gap-4 px-3">
          <div className="w-[50%]">
            {github ? (
              <Button variant="tertiary" className="flex justify-center gap-2" onClick={() => handleOpenLink(github)}>
                <p>Github</p>
                <GithubIcon className="w-6" />
              </Button>
            ) : null}
          </div>
          <div className="w-[50%]">
            {demo ? (
              <Button variant="tertiary" className="flex justify-center gap-2" onClick={() => handleOpenLink(demo)}>
                <p>Demo</p>
                <DemoIcon className="w-6" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
