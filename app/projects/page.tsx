'use client';

import React, { useState } from 'react'
import ProjectsNavbar from '../../components/projects-navbar'
import { Category } from '../../types'
import { projects as projectsData } from '../../data';
import ProjectCard from '../../components/project-card'

const Page = () => {

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter(project =>
      project.category.includes(category),
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="overflow-y-scroll px-5 py-2" style={{ height: '75vh' }}>
    <ProjectsNavbar
      handlerFilterCategory={handlerFilterCategory}
      active={active}
    />

    <div className="relative my-3 grid grid-cols-12 items-center gap-5">
      {projects.map(project => (
        <div
          key={project.name}
          className="col-span-12 flex h-full items-center justify-center rounded-lg bg-gray-200 p-2 dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
        >
          <ProjectCard project={project} key={project.name} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Page