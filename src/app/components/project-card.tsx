import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import { Project } from '../types';

const ProjectCard: FunctionComponent<{
  project: Project;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
      <motion.div className="">
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
              <h2 className="my-3 text-3xl font-bold sm:text-2xl">{name}</h2>
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
              <div className="my-2 flex justify-center md:my-4 md:flex-col">
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
                  <AiFillProject /> <span>Project</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowDetail(false)}
              className="cursor-pointer hover:border-orange dark:bg-dark-200 absolute top-3 right-3 rounded-full border-2 bg-gray-200 p-1"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </motion.div>
    );
  };

export default ProjectCard;
