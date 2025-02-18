import { RiComputerLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { FaServer, FaBusinessTime } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { Project, Service, Skill } from './types';
import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: MdDeveloperMode,
    title: 'Web, iOS & Android',
    about:
      'SaaS, Ecommerce, Social Media, Admin Dashboards, ... all SEO-friendly & multiplateform',
  },
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Creating efficient & user-friendly frontends with NextJS & TailwindCSS',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about: 'Create REST & GraphQL APIs with SQL databases',
  },
  {
    Icon: FaBusinessTime,
    title: 'Business skills',
    about: 'Sales, HR & PM experiences',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Freelance Coder',
    about: 'Hourly rate &/or scope based',
  },
  {
    Icon: BiWorld,
    title: 'International',
    about: 'English, French, Chinese & Spanish working communication',
  },
];

export const technos: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'React/Next',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'ReactNative',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Typescript',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'TailwindCss',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'ExpressJS',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'PostGreSQL',
    level: '60',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Git/Github',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Vercel',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'AWS',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Expo',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Cypress',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '60',
  },
];

export const projects: Project[] = [
  {
    name: 'Redilink',
    description: 'Social network for real estate professionals',
    image_path: '/images/projects/redilink.png',
    deployed_url:
      'https://play.google.com/store/apps/details?id=ch.redilink.firstapp&hl=en&gl=US',
    github_url: 'https://github.com/RediLink',
    category: ['reactNative', 'express', 'CMS', 'mongo'],
    key_techs: [
      'React Native',
      'React Admin',
      'Express',
      'mongo',
      'Material UI',
    ],
  },
  {
    name: 'Seafood Ecommerce',
    description: 'CRM & Ecommerce for seafood industry',
    image_path: '/images/projects/mikaelhertz.jpg',
    deployed_url: 'https://www.mikaelhertz.com/',
    github_url: 'https://github.com/manguocesar/salmon',
    category: ['nextJS', 'tailwindcss', 'CMS', 'node', 'typescript'],
    key_techs: ['NextJS', 'NodeJS', 'TailwindCss', 'Stripe', 'Typescript'],
  },
  {
    name: 'Meldd',
    description: 'Consensus & research mobile app',
    image_path: '/images/projects/meldd.png',
    deployed_url: 'https://apps.apple.com/fr/app/meldd/id6444099763',
    github_url: 'https://github.com/TheProlog/meldd_mono',
    category: ['reactNative', 'typescript', 'graphQL', 'postGreSQL'],
    key_techs: [
      'React Native',
      'expo',
      'Material UI',
      'graphQL',
      'i18next',
      'postGreSQL',
    ],
  },
  {
    name: "Cesar's Portfolio",
    description: 'Introducing myself with the tech I love',
    image_path: '/images/projects/portfolio.png',
    deployed_url: 'https://cesarhertz.com',
    github_url: 'https://github.com/manguocesar/portfolio',
    category: ['react', 'typescript', 'nextJS', 'tailwindcss'],
    key_techs: [
      'Next',
      'Typescript',
      'Tailwindcss',
      'i18next',
      'Framer Motion',
    ],
  },
  {
    name: 'Pola',
    description: 'Massage music app',
    image_path: '/images/projects/pola.jpg',
    deployed_url: '',
    github_url: 'https://github.com/balconia/mobileApp',
    category: ['reactNative', 'expo'],
    key_techs: ['React Native', 'expo'],
  },
  {
    name: 'Chipedin',
    description: 'Peer-to-peer crowd-gifting service',
    image_path: '/images/projects/chipedin.png',
    deployed_url: 'https://chipedin.com/',
    github_url: 'https://github.com/Chipedin/next_app',
    category: ['nextJS', 'tailwindcss', 'GoogleSpreadsheet'],
    key_techs: ['Next', 'Tailwindcss', 'Framer Motion', 'GoogleSpreadsheet'],
  },
  {
    name: 'Pureliving',
    image_path: '/images/projects/pureliving.png',
    deployed_url: 'https://qlear.io/',
    github_url: 'https://github.com/qlear-project/qlear-web-v3',
    description: 'Indoor environmental quality management system',
    category: ['react', 'antUI', 'typescript', 'postGreSQL'],
    key_techs: ['React', 'AntUI', 'Typescript'],
  },
  {
    name: 'Italki',
    image_path: '/images/projects/italki.png',
    deployed_url: 'https://www.italki.com/',
    github_url: 'https://github.com',
    category: ['nextJS', 'react', 'tailwindcss', 'typescript'],
    description: 'Online language learning platform',
    key_techs: ['React', 'Next', 'Typescript', 'TailwindCss', 'i18next'],
  },
  {
    name: 'Storever',
    image_path: '/images/projects/storever.png',
    deployed_url: 'https://www.storever.cn/zh/',
    github_url: 'https://github.com/Storever-Player-Music-China',
    category: [
      'react',
      'materialUI',
      'typescript',
      'express',
      'postGreSQL',
      'AWS',
    ],
    description: 'In-store online music player',
    key_techs: ['React', 'Next', 'Typescript', 'TailwindCss', 'i18next'],
  },
  {
    name: 'Salmon Store',
    image_path: '/images/projects/salmon.png',
    deployed_url: 'https://salmon-store.vercel.app/',
    github_url: 'https://github.com/manguocesar/salmon-store',
    category: ['nextJS', 'react', 'typescript', 'tailwindcss', 'CMS'],
    description: 'Salmon E-commerce',
    key_techs: ['Next', 'Stripe', 'TailwindCss', 'SanityCMS'],
  },
  {
    name: 'French House',
    image_path: '/images/projects/frenchHouse.webp',
    deployed_url: 'https://frenchhouse.cn/',
    github_url: 'https://github.com/manguocesar/FrenchHouse',
    category: ['nextJS', 'react', 'typescript', 'tailwindcss', 'CMS'],
    description: 'Interior design portfolio',
    key_techs: ['Next', 'typescript', 'TailwindCss', 'i18next'],
  },
];
