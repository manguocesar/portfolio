'use server';

import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiClick, GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import Wechat from './Wechat';
import Button from './Button';

const Sidebar = () => {
  return (
    <div
    >
      <Image
        src="/images/cesar.webp"
        alt="cesar hertz"
        className="hidden md:block mx-auto rounded-full border"
        height={170}
        width={128}
        priority
      />
      <Image
        src="/images/cesar.webp"
        alt="cesar hertz"
        className="block md:hidden mx-auto rounded-full border"
        height={150}
        width={100}
        priority
      />
      <h3 className="mt-4 font-kaushan text-3xl font-medium tracking-wider">
        <span className="text-orange">Cesar</span> 何赛
      </h3>
      <p className="dark:bg-black-500 font-bold text-xl mb-3 italic flex items-center justify-center rounded-full
        px-2 dark:bg-dark-200">
        Web Developer
        <GiTie className="h-6 w-6" />
      </p>
      <a
      aria-label="Open Cesar's resume"
        href="/assets/2025 CV Cesar HERTZ Software.pdf"
        download="2025 CV Cesar HERTZ Software.pdf"
        className="dark:bg-black-500 border-2 hover:border-orange my-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-200"
      >
        <span>Download Resume</span>
        <GiClick className="h-4 w-4" />
      </a>

      <div className="mx-auto my-4 flex w-10/12 justify-around text-orange md:w-full">
        <Wechat />
        <div>
          <a target='_blank' aria-label="Open linkedin page" href="https://www.linkedin.com/in/hertz-cesar/">
            <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
        <div>
          <a target='-blank' aria-label="Open Cesar's github page" href="https://github.com/manguocesar">
            <AiFillGithub className="h-8 w-8 cursor-pointer" />{' '}
          </a>
        </div>
      </div>

      <div
        className="dark:bg-black-500 my-5 bg-gray-200 py-4 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Copenhagen </span>
        </div>
        <p className="my-2">cesar.hertz@icloud.com</p>
        <p className="my-2">+ 45 31 80 92 75</p>
      </div>
    <Button title="Email me"  />
    <Button title="Day / Night Theme" />
    </div>
  );
};

export default Sidebar;
