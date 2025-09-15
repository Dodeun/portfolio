import type { TechIconProps } from "../tech-icons/tech-icons.types";

function ArrowIcon({ className }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M9 13L9 10H16V6L9 6L9 3L8 3L3 8L8 13H9Z" fill="currentColor" />
      <path d="M2 14L2 2L0 2L5.24537e-07 14H2Z" fill="currentColor" />
    </svg>
  );
}

export default ArrowIcon;
