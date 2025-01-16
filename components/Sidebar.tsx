'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillWechat } from 'react-icons/ai';
import { GiClick, GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [wechat, setWechat] = useState(false);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      <Image
        src="/images/cesar.png"
        alt="cesar hertz"
        className="mx-auto rounded-full border"
        height={170}
        width={128}
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 font-kaushan text-3xl font-medium tracking-wider">
        <span className="text-orange">Cesar</span> 何赛
      </h3>
      <p className="dark:bg-black-500 my-3 flex items-center justify-center rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-200">
        Web Developer
        <GiTie className="h-6 w-6" />
      </p>
      <a
        href="/assets/2025 CV Cesar HERTZ Software.pdf"
        download="2025 CV Cesar HERTZ Software.pdf"
        className="dark:bg-black-500 my-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-200"
      >
        <span>Download Resume</span>
        <GiClick className="h-4 w-4" />
      </a>

      <div className="mx-auto my-4 flex w-10/12 justify-around text-orange md:w-full">
        {wechat ? (
          <div className="w-3/12">
            <Image alt="wechat-picture" src="/images/wechat.jpg" />
          </div>
        ) : (
          <AiFillWechat
            className="h-8 w-8 cursor-pointer"
            onClick={() => setWechat(true)}
          />
        )}
        <a href="https://www.linkedin.com/in/hertz-cesar/">
          <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://github.com/manguocesar">
          <AiFillGithub className="h-8 w-8 cursor-pointer" />{' '}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="dark:bg-black-500 my-5 bg-gray-200 py-4 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Copenhagen </span>
        </div>
        <p className="my-2">cesar.hertz@icloud.com</p>
        <p className="my-2">+45 31 80 92 75</p>
      </div>

      {/* Email Button */}

      <motion.button
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.3 },
        }}
        className="focus:outline-none w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-tr from-blue-800 to-orange px-5 py-2 text-white hover:scale-105"
        onClick={() => window.open('cesar.hertz@icloud.com')}
      >
        Email me
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.3 },
        }}
        onClick={changeTheme}
        data-cy="change-theme"
        className="focus:outline-none my-4 w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-tr from-blue-800 to-orange px-5 py-2 text-white hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Day / Night Theme
      </motion.button>
    </motion.div>
  );
};

export default Sidebar;
