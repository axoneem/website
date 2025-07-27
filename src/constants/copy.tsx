import MockrLogo from "@/components/logos/MockrLogo";
import PapayaLogo from "@/components/logos/PapayaLogo";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import PapayaScreenshot1 from "../../public/images/projects/zisk3.png";

interface Action {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface Highlight {
  label: string;
}

export interface Project {
  name: string;
  logo: ReactNode;
  headline: ReactNode;
  tags: string[];
  description: ReactNode;
  screenshots: StaticImageData[];
  actions?: Action[];
  highlights?: Highlight[]
  disabled?: boolean;
}

const projects: Project[] = [
  {
    name: "Papaya",
    logo: <PapayaLogo />,
    headline: <>Your finances, on your devices &mdash; with Papaya.</>,
    // tagline: "The local-first, open-source, personal finance app",
    description: <>Papaya is the local-first, open-source, personal finance app to track expenses, manage accounts, and categorize spending &mdash; without sending anything to the cloud.</>,

    tags: ["Personal Finance", "Local-First"],
    actions: [
      {
        label: "Try Papaya",
        href: "https://papaya.axoneme.org",
        variant: "primary",
      },
      {
        label: "Learn More",
        href: "/papaya",
        variant: "secondary",
      }
    ],
    screenshots: [
      PapayaScreenshot1,
    ],

  },
  // {
  //   name: "Mockr",
  //   logo: <MockrLogo />,
  //   tagline: "Mockr is a tool for generating mock data for your software development projects.",
  //   tags: ["Software Development"],
  //   description: <>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //   </>,
  //   screenshotSrc: "/images/projects/mockr.png",
  //   disabled: true,
  // },
]

const copy = {
  projects,
} as const;

export default copy;