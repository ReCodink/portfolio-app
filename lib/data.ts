import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import streetflowImg from "@/public/project-streetflow.png";
import simarqaImg from "@/public/mobile.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Web Development Intensive Bootcamp ",
    location: "Online",
    description:
      "I graduated after 6 months of studying. I have develop project `StreetFlow` with team as a full-stack web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Streetflow",
    description:
      "I worked as a full-stack developer on this bootcamp project-based for 1 month at some feature.",
    tags: ["React", "Next.js", "PostgreSQL", "Sequelize", "Tailwind", "Prisma", "Express.js", "NPM", "PgAdmin", "DaisyUI"],
    imageUrl: streetflowImg,
    githubUrl: "https://github.com/K1StreetFlow"
  },
  {
    title: "Aqsyanna Manage",
    description:
      "I worked as a back-end developer on this project-based campus for 3 month at full feature.",
    tags: ["Express.js", "MySQL", "Sequelize", "Jest", "NPM"],
    imageUrl: simarqaImg,
    githubUrl: "https://github.com/pausii/SimaRQA/tree/backend-dev"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Postman",
  "Sequelize",
  "Java",
] as const;
