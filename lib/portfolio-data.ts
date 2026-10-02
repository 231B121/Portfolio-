import type { ComponentType } from "react";

export type TreeItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: TreeItem[];
  component?: ComponentType<any>;
};

// Content components
import AboutContent from "@/components/content/AboutContent";
import AboutDetails from "@/components/content/AboutDetails";
import ExperienceLog from "@/components/content/ExperienceLog";
import ProjectRepoX from "@/components/content/ProjectRepoX";
import ProjectPacketSniffer from "@/components/content/ProjectPacketSniffer";
import ProjectBrahmion from "@/components/content/ProjectBrahmion";
import ProjectSchemeAdvisor from "@/components/content/ProjectSchemeAdvisor";
import ProjectEdugen from "@/components/content/ProjectEdugen";
import ProjectFoodOrdering from "@/components/content/ProjectFoodOrdering";
import ProjectUrlShortener from "@/components/content/ProjectUrlShortener";
import { EducationFile, CertificationFile } from "@/components/content/Credentials";
import TechLanguages from "@/components/content/TechLanguages";
import TechFrameworks from "@/components/content/TechFrameworks";
import TechTechnologies from "@/components/content/TechTechnologies";
import ConnectLinks from "@/components/content/ConnectLinks";

export const fileTree: TreeItem[] = [
  {
    id: "portfolio",
    name: "portfolio",
    type: "folder",
    children: [
      {
        id: "about",
        name: "about",
        type: "folder",
        children: [
          {
            id: "about-home",
            name: "welcome.md",
            type: "file",
            component: AboutContent,
          },
          {
            id: "about-details",
            name: "profile.md",
            type: "file",
            component: AboutDetails,
          },
        ],
      },
      {
        id: "experience",
        name: "experience",
        type: "folder",
        children: [
          {
            id: "experience-log",
            name: "experience.md",
            type: "file",
            component: ExperienceLog,
          },
        ],
      },
      {
        id: "projects",
        name: "projects",
        type: "folder",
        children: [
          {
            id: "projects-ai",
            name: "ai-and-agents",
            type: "folder",
            children: [
              {
                id: "project-repox",
                name: "repox-agent.jsx",
                type: "file",
                component: ProjectRepoX,
              },
            ],
          },
          {
            id: "projects-ml",
            name: "ml-and-security",
            type: "folder",
            children: [
              {
                id: "project-packet-sniffer",
                name: "packet-sniffer-ml.jsx",
                type: "file",
                component: ProjectPacketSniffer,
              },
              {
                id: "project-scheme-advisor",
                name: "scheme-advisor.jsx",
                type: "file",
                component: ProjectSchemeAdvisor,
              },
            ],
          },
          {
            id: "projects-web",
            name: "full-stack-web",
            type: "folder",
            children: [
              {
                id: "project-brahmion",
                name: "brahmion-spacetech.jsx",
                type: "file",
                component: ProjectBrahmion,
              },
              {
                id: "project-edugen",
                name: "edugen-quiz.jsx",
                type: "file",
                component: ProjectEdugen,
              },
              {
                id: "project-food-ordering",
                name: "food-ordering.jsx",
                type: "file",
                component: ProjectFoodOrdering,
              },
              {
                id: "project-url-shortener",
                name: "url-shortener.jsx",
                type: "file",
                component: ProjectUrlShortener,
              },
            ],
          },
        ],
      },
      {
        id: "credentials",
        name: "credentials",
        type: "folder",
        children: [
          {
            id: "education",
            name: "education.md",
            type: "file",
            component: EducationFile,
          },
          {
            id: "certification",
            name: "achievements.md",
            type: "file",
            component: CertificationFile,
          },
        ],
      },
      {
        id: "tech-stack",
        name: "tech-stack",
        type: "folder",
        children: [
          {
            id: "tech-languages",
            name: "languages.jsx",
            type: "file",
            component: TechLanguages,
          },
          {
            id: "tech-frameworks",
            name: "frameworks.jsx",
            type: "file",
            component: TechFrameworks,
          },
          {
            id: "tech-technologies",
            name: "tools-and-ai.jsx",
            type: "file",
            component: TechTechnologies,
          },
        ],
      },
      {
        id: "connect-folder",
        name: "connect",
        type: "folder",
        children: [
          {
            id: "connect",
            name: "connect-links.jsx",
            type: "file",
            component: ConnectLinks,
          },
        ],
      },
    ],
  },
];
