import MockrLogo from "@/components/logos/MockrLogo";
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
  tags: string[];
  description: ReactNode;
  screenshotSrc: string;
  actions?: Action[];
  highlights?: Highlight[]
}

const projects: Project[] = [
  {
    name: "Papaya",
    logo: <PapayaLogo />,
    tagline: "The local-first, open-source, personal finance app",
    tags: ["Personal Finance", "Local-First"],
    description: <>
      <p>Your financial data, on your devices. Papaya tracks expenses, manages accounts, and categorizes spending without sending anything to the cloud. Built with CouchDB's sync capabilities, your data stays consistent across all your devices without trusting third-party services with your sensitive financial information.</p>
      <p>Papaya's straightforward interface and offline-first design makes financial tracking accessible regardless of technical or finance expertise. Personal finance management doesn't require sacrificing privacy or paying subscription fees.</p>
    </>,
    actions: [
      {
        label: "Try Papaya",
        href: "https://papaya.axoneme.org",
      }
    ],
    screenshotSrc: "/images/projects/zisk3.png",
  },
  {
    name: "Mockr",
    logo: <MockrLogo />,
    tagline: "Mockr is a tool for generating mock data for your software development projects.",
    tags: ["Software Development"],
    description: <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>,
    screenshotSrc: "/images/projects/mockr.png",
  },
]

const copy = {
  projects,
} as const;

export default copy;