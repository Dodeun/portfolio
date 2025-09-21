import type { Skill } from "../../types/skill.type";

// Simple card containing the skill  icon and its name
interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <li className="group bg-bg-primary-1000 shadow-inner-md hover:shadow-inner-lg small:w-[112px] flex aspect-square w-[104px] flex-col items-center gap-2 rounded-md p-3 transition">
      <skill.Icon className={`${skill.color} small:w-14 w-12 transition`} />
      <p className="text-text-primary-100 group-hover:text-text-primary-0 text-center">{skill.name}</p>
    </li>
  );
}

export default SkillCard;
