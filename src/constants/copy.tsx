import PapayaLogo from "@/components/logos/PapayaLogo";
import { ReactNode } from "react";

type Markdown = string;

interface Action {
  label: string;
  href: string;
}

interface Highlight {
  label: string;
}

export interface Project {
  name: string;
  logo: ReactNode;
  tagline: string;
  description: Markdown;
  actions?: Action[];
  highlights?: Highlight[]
}

const projects: Project[] = [
  {
    name: "Papaya",
    logo: <PapayaLogo />,
    tagline: "A new way to manage your money",
    description: "Papaya is a new way to manage your money. It's a mobile app that allows you to track your spending and save money.",
  },
]

const copy = {
  projects,
} as const;

export default copy;