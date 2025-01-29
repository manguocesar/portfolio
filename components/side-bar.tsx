'use server';

import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiClick, GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import Wechat from './wechat';
import Button from './button';

const Sidebar = () => {
  return (
    <div className="shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark col-span-12 h-full rounded-2xl border bg-white py-4 text-center text-base lg:col-span-3">
      <div className="m-2 flex flex-col">
        <Image
          src="/images/cesar.png"
          alt="cesar hertz"
          className="mx-auto rounded-full border"
          height={170}
          width={128}
          priority
        />
        <div className="flex flex-col justify-end sm:items-center">
          <h3 className="font-kaushan text-center text-3xl font-medium tracking-wider md:mt-4 md:text-center">
            <span className="text-orange">Cesar</span>
          </h3>
          <p className="dark:bg-black-500 dark:bg-dark-200 flex items-center justify-center rounded-full text-lg font-bold italic md:mb-3 md:px-2">
            Web Developer
            <GiTie className="h-6 w-6" />
          </p>
          <a
            aria-label="Open Cesar's resume"
            href="/assets/2025 CV Cesar HERTZ Software.pdf"
            download="2025 CV Cesar HERTZ Software.pdf"
            className="dark:bg-black-500 hover:border-orange dark:bg-dark-200 my-2 flex cursor-pointer items-center justify-center rounded-full border-2 bg-gray-200 px-2 py-1 transition duration-200 ease-in-out hover:scale-105 sm:w-1/2 lg:w-full"
          >
            <span>Download Resume</span>
            <GiClick className="h-4 w-4 lg:w-1/6" />
          </a>
        </div>
      </div>

      <div className="text-orange relative mx-auto my-4 flex w-10/12 items-center justify-around sm:w-1/2 sm:justify-around lg:w-full">
        <Wechat />
        <div className="">
          <a
            target="_blank"
            aria-label="Open linkedin page"
            href="https://www.linkedin.com/in/hertz-cesar/"
          >
            <AiFillLinkedin className="h-8 w-8 cursor-pointer transition duration-200 ease-in-out hover:scale-150" />
          </a>
        </div>
        <div>
          <a
            target="-blank"
            aria-label="Open Cesar's github page"
            href="https://github.com/manguocesar"
          >
            <AiFillGithub className="h-8 w-8 cursor-pointer transition duration-200 ease-in-out hover:scale-150" />{' '}
          </a>
        </div>
      </div>

      <div className="dark:bg-black-500 dark:bg-dark-200 my-2 bg-gray-200 py-1 md:my-5 md:py-4">
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Copenhagen </span>
        </div>
        <p className="my-2">cesar.hertz@icloud.com</p>
        <p className="my-2">+ 45 31 80 92 75</p>
      </div>
      <Button title="Email me" />
      <Button title="Day / Night Theme" />
    </div>
  );
};

export default Sidebar;
