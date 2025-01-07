import { RiComputerLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { FaServer, FaBusinessTime } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Creating efficient & user-friendly frontends with <b>ReactJS</b> & <b>CSS</b> frameworks ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Create REST APIs & databases using <b>ExpressJS</b> & <b>MongoDB</b>",
  },
  {
    Icon: FaBusinessTime,
    title: "Business skills",
    about:
      "Experience with <b>sales</b>, <b>HR</b> & <b>management</b> assignments",
  },
  {
    Icon: MdDeveloperMode,
    title: "Freelance Coder",
    about: "<b>Hourly rate</b> &/or <b>scope based</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "User interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: BiWorld,
    title: "International",
    about:
      "<b>English</b>, <b>French</b>, <b>Chinese</b> & <b>Spanish</b> working communication",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React/Next",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCss",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git/Github",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Vercel",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Cesar's Portfolio",
    description:  "Introducing myself with the tech I love",
    image_path: "/images/projects/portfolio.png",
    deployed_url: "",
    github_url: "https://github.com/manguocesar/portfolio",
    category: ["react", "typescript", "next", "tailwindcss"],
    key_techs: ["Next", "Typescript", "Tailwindcss", "i18next"],
  },
  { 
    name: "Redilink",
    description:  "Social network for real estate professionals",
    image_path: "/images/projects/redilink.png",
    deployed_url: "https://play.google.com/store/apps/details?id=ch.redilink.firstapp&hl=en&gl=US",
    github_url: "https://github.com/RediLink",
    category: ["react native", "express", "headlessCMS"],
    key_techs: ["React Native", "React Admin", "Express", "Material UI"],
  },
  { 
    name: "Meldd",
    description:  "Consensus & research mobile app",
    image_path: "/images/projects/meldd.png",
    deployed_url: "https://apps.apple.com/fr/app/meldd/id6444099763",
    github_url: "https://github.com/TheProlog/meldd_mono",
    category: ["react native", "typescript", "graphQL"],
    key_techs: ["React Native", "Material UI"],
  },
  {
    name: "Chipedin",
    description: "Peer-to-peer crowd-gifting service",
    image_path: "/images/projects/chipedin.png",
    deployed_url: "https://chipedin.com/",
    github_url: "https://github.com/Chipedin/next_app",
    category: ["next", "tailwindcss" ],
    key_techs: ["Next", "Tailwindcss", "Framer Motion"],
  },
  {
    name: "Pureliving",
    image_path: "/images/projects/pureliving.png",
    deployed_url: "https://qlear.io/",
    github_url: "https://github.com/qlear-project/qlear-web-v3",
    category: ["react", "antUI", "typescript"],
    description: "Indoor environmental quality management system",
    key_techs: [
      "React",
      "AntUI",
      "Typescript",
    ],
  },
  {
    name: "Italki",
    image_path: "/images/projects/italki.png",
    deployed_url: "https://www.italki.com/",
    github_url: "https://github.com",
    category: ["next", "react", "tailwindcss", "typescript"],
    description: "Online language learning platform",
    key_techs: ["React", "Next", "Typescript", "TailwindCss", "i18next"],
  },
  {
    name: "Storever",
    image_path: "/images/projects/storever.png",
    deployed_url: "https://www.storever.cn/zh/",
    github_url: "https://github.com/Storever-Player-Music-China",
    category: ["react", "materialUI", "typescript", "express"],
    description: "In-store online music player",
    key_techs: ["React", "Next", "Typescript", "TailwindCss", "i18next"],
  },
  {
    name: "Salmon Store",
    image_path: "/images/projects/salmon.png",
    deployed_url: "https://salmon-store.vercel.app/",
    github_url: "https://github.com/manguocesar/salmon-store",
    category: ["next", "react", "typescript", "tailwindcss", "headlessCMS"],
    description: "Salmon E-commerce",
    key_techs: ["Next", "Stripe", "TailwindCss", "SanityCMS"],
  },
  {
    name: "French House",
    image_path: "/images/projects/frenchHouse.webp",
    deployed_url: "https://frenchhouse.cn/",
    github_url: "https://github.com/manguocesar/FrenchHouse",
    category: ["next", "react", "typescript", "tailwindcss", "headlessCMS"],
    description: "Interior design portfolio",
    key_techs: ["Next", "typescript", "TailwindCss", "i18next"],
  },
];
