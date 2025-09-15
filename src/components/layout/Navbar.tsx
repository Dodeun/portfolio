// Allows user to change content display to about / projects / skills

import type { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";

export type TabType = "about" | "skills" | "projects";

interface NavBarProps {
  activeTab: TabType;
  setActiveTab: Dispatch<SetStateAction<TabType>>;
}

function Navbar({ activeTab, setActiveTab }: NavBarProps) {
  return (
    <ul className="medium:gap-4 flex w-full gap-2">
      <li className="flex-1">
        <Button variant="nav" onClick={() => setActiveTab("about")} isActive={activeTab === "about"}>
          About
        </Button>
      </li>
      <li className="flex-1">
        <Button variant="nav" onClick={() => setActiveTab("skills")} isActive={activeTab === "skills"}>
          Skills
        </Button>
      </li>
      <li className="flex-1">
        <Button variant="nav" onClick={() => setActiveTab("projects")} isActive={activeTab === "projects"}>
          Projects
        </Button>
      </li>
    </ul>
  );
}

export default Navbar;
