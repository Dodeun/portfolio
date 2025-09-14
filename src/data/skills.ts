import HtmlIcon from "../components/icons/tech-icons/HtmlIcon";
import CssIcon from "../components/icons/tech-icons/CssIcon";
import JavaScriptIcon from "../components/icons/tech-icons/JavaScriptIcon";
import ReactIcon from "../components/icons/tech-icons/ReactIcon";
import TypeScriptIcon from "../components/icons/tech-icons/TypeScriptIcon";
import TailwindIcon from "../components/icons/tech-icons/TailwindIcon";
import NodeIcon from "../components/icons/tech-icons/NodeIcon";
import ExpressIcon from "../components/icons/tech-icons/ExpressIcon";
import NestJSIcon from "../components/icons/tech-icons/NestJSIcon";
import MySQLIcon from "../components/icons/tech-icons/MySQLIcon";
import JestIcon from "../components/icons/tech-icons/JestIcon";
import CypressIcon from "../components/icons/tech-icons/CypressIcon";
import GitIcon from "../components/icons/tech-icons/GitIcon";
import GithubIcon from "../components/icons/tech-icons/GithubIcon";
import DockerIcon from "../components/icons/tech-icons/DockerIcon";
import VSCodeIcon from "../components/icons/tech-icons/VSCodeIcon";

export const skills = [
  {
    name: "HTML",
    Icon: HtmlIcon,
    color: "#E34F26",
    order: {
      frontend: 1,
    },
  },
  {
    name: "CSS",
    Icon: CssIcon,
    color: "#1572B6",
    order: {
      frontend: 2,
    },
  },
  {
    name: "JavaScript",
    Icon: JavaScriptIcon,
    color: "#F7DF1E",
    order: {
      frontend: 3,
    },
  },
  {
    name: "React",
    Icon: ReactIcon,
    color: "#61DAFB",
    order: {
      frontend: 4,
    },
  },
  {
    name: "TypeScript",
    Icon: TypeScriptIcon,
    color: "#3178C6",
    order: {
      frontend: 5,
      backend: 4,
    },
  },
  {
    name: "Tailwind",
    Icon: TailwindIcon,
    color: "#06B6D4",
    order: {
      frontend: 6,
    },
  },
  {
    name: "Node.js",
    Icon: NodeIcon,
    color: "#339933",
    order: {
      backend: 1,
    },
  },
  {
    name: "Express",
    Icon: ExpressIcon,
    color: "PLACEHOLDER",
    order: {
      backend: 2,
    },
  },
  {
    name: "NestJS",
    Icon: NestJSIcon,
    color: "PLACEHOLDER",
    order: {
      backend: 3,
    },
  },
  {
    name: "MySQL",
    Icon: MySQLIcon,
    color: "#4479A1",
    order: {
      database: 1,
    },
  },
  {
    name: "Jest",
    Icon: JestIcon,
    color: "PLACEHOLDER",
    order: {
      tests: 1,
    },
  },
  {
    name: "Cypress",
    Icon: CypressIcon,
    color: "PLACEHOLDER",
    order: {
      tests: 2,
    },
  },
  {
    name: "Git",
    Icon: GitIcon,
    color: "#F05032",
    order: {
      tools: 1,
    },
  },
  {
    name: "Github",
    Icon: GithubIcon,
    color: "#181717",
    order: {
      tools: 2,
    },
  },
  {
    name: "Docker",
    Icon: DockerIcon,
    color: "#2496ED",
    order: {
      tools: 3,
    },
  },
  {
    name: "VSCode",
    Icon: VSCodeIcon,
    color: "#007ACC",
    order: {
      tools: 4,
    },
  },
];
