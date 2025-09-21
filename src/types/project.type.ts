export interface Project {
  title: string;
  description: string;
  duration: number;
  role: string;
  teamSize: number;
  stack: string[];
  screenshots: string[];
  github: string;
  demo: string | null;
}
