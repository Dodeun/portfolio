// Display a list of the owner's skills organised by front / back ...
import backDesktopIllustration from "../../assets/illustrations/working-desktop-back.svg";
import { skills } from "../../data/skills";
import type { Skill } from "../../types/skill.type";
import SkillCard from "../cards/SkillCard";

function Skills() {
  function getSkillsByCategory(skillsArray: Skill[], category: keyof Skill["order"]) {
    return skillsArray
      .filter((s) => s.order[category] !== undefined)
      .sort((a, b) => (a.order[category] ?? 0) - (b.order[category] ?? 0));
  }
  return (
    <div className="relative flex-1">
      <h1 className="sr-only">My technical skilss</h1>
      <ul className="flex flex-col gap-[5vh]">
        <li>
          <h2 className="mb-2 text-2xl">Frontend</h2>
          <ul className="flex flex-wrap gap-2">
            {getSkillsByCategory(skills, "frontend").map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </li>
        <li>
          <h2 className="mb-2 text-2xl">Backend</h2>
          <ul className="flex flex-wrap gap-2">
            {getSkillsByCategory(skills, "backend").map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </li>
        <li>
          <ul className="medium:flex-row medium:gap-[128px] flex flex-col gap-[5vh]">
            <div>
              <h2 className="mb-2 text-2xl">Database</h2>
              <ul className="flex flex-wrap gap-2">
                {getSkillsByCategory(skills, "database").map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-2xl">Tests</h2>
              <ul className="flex flex-wrap gap-2">
                {getSkillsByCategory(skills, "tests").map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          </ul>
        </li>
        <li>
          <h2 className="mb-2 text-2xl">Tools</h2>
          <ul className="flex flex-wrap gap-2">
            {getSkillsByCategory(skills, "tools").map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </li>
      </ul>
      <div className="verylarge:block absolute right-1 bottom-1 hidden">
        <img className="w-[25vw] max-w-[450px] min-w-[250px]" src={backDesktopIllustration} alt="Illustration" />
      </div>
    </div>
  );
}

export default Skills;
