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
      <div className="m-0">
        <Image
          src="/images/cesar.png"
          alt="Cesar's image"
          className="mx-auto rounded-full border"
          height={170}
          width={128}
          priority
        />
        <div className="flex flex-col justify-end sm:items-center">
          <h3 className="font-kaushan text-center text-3xl font-medium tracking-wider md:mt-4 md:text-center">
            <span className="text-orange transition duration-1000 ease-in-out ">
              Cesar 何赛
            </span>
          </h3>
          <p className="hover:text-orange flex items-center justify-center rounded-full text-lg font-bold italic transition duration-1000 ease-in-out md:mb-3 md:px-2">
            Web Developer
            <GiTie className="h-6 w-6" />
          </p>
          <button className="">
            <a
              aria-label="Open Cesar's resume"
              href="/assets/2025 CV Cesar HERTZ Software.pdf"
              download="2025 CV Cesar HERTZ Software.pdf"
              className="dark:text-black dark:border-orange hover:border-orange m-2 flex cursor-pointer items-center justify-center rounded-full border-2 bg-gray-200 px-2 py-1 transition duration-1000 ease-in-out hover:scale-105 sm:w-1/2 lg:w-full"
            >
              <span>Download Resume</span>
              <GiClick className="h-4 w-4 lg:w-1/6" />
            </a>
          </button>
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
            <AiFillLinkedin className="h-8 w-8 cursor-pointer transition duration-1000 ease-in-out hover:scale-150" />
          </a>
        </div>
        <div>
          <a
            target="-blank"
            aria-label="Open Cesar's github page"
            href="https://github.com/manguocesar"
          >
            <AiFillGithub className="h-8 w-8 cursor-pointer transition duration-1000 ease-in-out hover:scale-150" />{' '}
          </a>
        </div>
      </div>

      <div className=" dark:text-black my-2 bg-gray-200 py-1 md:my-5 md:py-4">
        <div className="flex items-center justify-center transition duration-1000 hover:text-white">
          <GoLocation className="mr-2" /> <span>Copenhagen </span>
        </div>
        <p className="my-2 transition duration-1000 hover:text-white">
          cesar.hertz@icloud.com
        </p>
        <p className="my-2 transition duration-1000 hover:text-white">
          + 45 31 80 92 75
        </p>
      </div>
      <Button title="Email me" />
      <Button title="Day / Night Theme" />
    </div>
  );
};

export default Sidebar;
