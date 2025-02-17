export interface Service {
  Icon: React.ReactNode;
  title: string;
  about: string;
}

export interface Skill {
  Icon: React.ReactNode;
  name: string;
  level: string;
}

export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | 'react'
  | 'expo'
  | 'graphQL'
  | 'reactNative'
  | 'tailwindcss'
  | 'CMS'
  | 'node'
  | 'express'
  | 'mongo'
  | 'nextJS'
  | 'typescript'
  | 'antUI'
  | 'materialUI'
  | 'postGreSQL'
  | 'GoogleSpreadsheet'
  | 'AWS';
