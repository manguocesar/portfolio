'use client';

import { MotionWrapper } from './motion-wrapper';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Project } from '../types';
import { useTranslations } from 'next-intl';

export const ProjectCard: React.ComponentType<{
  project: Project;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const t = useTranslations('Project');
  const [showDetail, setShowDetail] = useState(false);

  return (
    <MotionWrapper.div>
      <Image
        src={image_path}
        alt={name}
        className="hover:border-orange block cursor-pointer rounded-lg border-4 lg:block"
        onClick={() => setShowDetail(true)}
        height="150"
        width="300"
        priority
      />
      <p className="my-2 text-center font-bold">{name}</p>
      {showDetail && (
        <div className="dark:bg-dark-100 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 rounded-lg bg-gray-100 p-2 text-black sm:grid dark:text-white">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="my-3 text-2xl font-bold sm:text-2xl md:text-3xl">
                {name}
              </h2>
              <button
                onClick={() => setShowDetail(false)}
                className="hover:border-orange dark:bg-dark-200 cursor-pointer rounded-full border-2 bg-gray-200 p-1"
              >
                <MdClose className="hidden md:block" size={30} />
                <MdClose className="block md:hidden" size={20} />
              </button>
            </div>
            <h3 className="mb-3 text-xl font-medium">{description}</h3>

            <div className="flex flex-wrap text-sm tracking-wider md:mt-5">
              {key_techs.map(tech => (
                <span
                  key={tech}
                  className="rounde-sm dark:bg-dark-200 m-1 bg-gray-200 px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="my-2 flex justify-around md:my-4 md:flex-col md:justify-center">
              <a
                target="_blank"
                aria-label="Open the github repo"
                href={github_url}
                className="hover:border-orange dark:bg-dark-200 flex items-center rounded border-2 bg-gray-200 px-4 py-2 text-xl md:my-2 md:space-x-3"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                target="_blank"
                aria-label="Open the web app"
                href={deployed_url}
                className="hover:border-orange dark:bg-dark-200 flex items-center rounded border-2 bg-gray-200 px-4 py-2 text-xl md:space-x-3"
              >
                <AiFillProject /> <span>{t('project')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </MotionWrapper.div>
  );
};
