// Informations regarding a project with the ability to view his github and a demo when available
import type { Project } from "../../types/project.type";
import React, { Suspense } from "react";
import Button from "../ui/Button";
import GithubIcon from "../icons/tech-icons/GithubIcon";
import DemoIcon from "../icons/base-icons/DemoIcon";

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
              const Icon = React.lazy(() => import(`../icons/tech-icons/${tech}Icon`));

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
