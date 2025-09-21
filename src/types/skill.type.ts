import type { ComponentType } from "react";

export interface Skill {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  color: string;
  order: {
    frontend?: number;
    backend?: number;
    database?: number;
    tests?: number;
    tools?: number;
  };
}
