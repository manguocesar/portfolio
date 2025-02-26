'use client';
import { TechNav } from './tech-nav';
import { Category } from '../types';

interface ProjectsNavbarProps {
  handlerFilterCategory: Function;
  active: string;
}

const techValues = [
  'all',
  'react',
  'reactNative',
  'tailwindcss',
  'nextJS',
  'CMS',
  'express'
];

export const ProjectsNavbar: React.ComponentType<ProjectsNavbarProps> = ({ handlerFilterCategory, active }) => {
  return (
    <div className="grid list-none grid-cols-3 gap-2 overflow-x-auto px-3 py-2 sm:flex sm:space-x-3">
      {techValues.map(value => (
        <TechNav key={value} value={value as Category} handlerFilterCategory={handlerFilterCategory} active={active} />
      ))}
    </div>
  );
};