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
      <motion.div>
        <Image
          src={image_path}
          alt={name}
          className="lg:hidden rounded-lg"
          height="150"
          width="300"

        />
        <Image
          src={image_path}
          alt={name}
          className="hidden lg:block cursor-pointer rounded-lg hover:border-orange border-4"
          onClick={() => setShowDetail(true)}
          height="150"
          width="300"
        />
        <p className="my-2 text-center font-bold">{name}</p>

        {showDetail && (
          <div className="hidden absolute left-0 top-0 z-10 md:grid w-full h-auto gap-x-12
         bg-gray-100 p-2 text-black dark:bg-dark-100 dark:text-white md:grid-cols-2">
            <div>
              <Image
                src={image_path}
                alt={name}
                className="rounded-xl"
                height="150"
                width="300"
              />
              <div className="my-4 flex justify-center space-x-3">
                <a target="_blank" aria-label="Open the github repo"
                  href={github_url}
                  className="flex items-center space-x-3 rounded hover:border-orange border-2 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a target="_blank" aria-label="Open the web app"
                  href={deployed_url}
                  className="flex items-center space-x-3 rounded hover:border-orange border-2 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold md:text-2xl">{name}</h2>
              <h3 className="mb-3 font-medium">{description}</h3>

              <div className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider">
                {key_techs.map(tech => (
                  <span
                    key={tech}
                    className="rounde-sm my-1 bg-gray-200 px-2 py-1 dark:bg-dark-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowDetail(false)}
              className="focus:outline-none absolute hover:border-orange border-2 right-3 top-3 rounded-full bg-gray-200 p-1 dark:bg-dark-200"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </motion.div>
    );
  };

export default ProjectCard;
