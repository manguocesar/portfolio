'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillWechat } from 'react-icons/ai';
import { GiClick, GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

const Sidebar = () => {
  const [wechat, setWechat] = useState(false);

  const changeTheme = () => {
    document.documentElement.classList.toggle('dark')
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
        quality="100"
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
        href="/assets/2025 CV Cesar HERTZ Software.pdf"
        download="2025 CV Cesar HERTZ Software.pdf"
        className="dark:bg-black-500 border-2 hover:border-orange my-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-200"
      >
        <span>Download Resume</span>
        <GiClick className="h-4 w-4" />
      </a>

      <div className="mx-auto my-4 flex w-10/12 justify-around text-orange md:w-full">
        {wechat ? (
          <div
          onClick={() => setWechat(false)}
            className="absolute w-3/12 border-2 border-orange cursor-pointer">
            <Image width={300} height={300} alt="wechat-picture" src="/images/wechat.jpg" />
          </div>
        ) : (
          <motion.div whileHover={{
            scale: 1.4,
            transition: { duration: 0.3 }
          }}>
            <AiFillWechat
              className="h-8 w-8 cursor-pointer"
              onClick={() => setWechat(true)}
            />
          </motion.div>
        )}
        <motion.div whileHover={{
          scale: 1.4,
          transition: { duration: 0.3 },
        }}>
          <a href="https://www.linkedin.com/in/hertz-cesar/">
            <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
          </a>
        </motion.div>
        <motion.div whileHover={{
          scale: 1.4,
          transition: { duration: 0.3 },
        }}>
          <a href="https://github.com/manguocesar">
            <AiFillGithub className="h-8 w-8 cursor-pointer" />{' '}
          </a>
        </motion.div>
      </div>

      <div
        className="dark:bg-black-500 my-5 bg-gray-200 py-4 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Copenhagen </span>
        </div>
        <a href='https://www.linkedin.com/in/hertz-cesar/'  target="_blank" className="my-2">cesar.hertz@icloud.com</a>
        <p className="my-2">+ 45 31 80 92 75</p>
      </div>

      <motion.button
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.3 },
        }}
        className="focus:outline-none w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-tr from-blue-800 to-orange px-5 py-2 text-white hover:scale-105"
        onClick={() => window.open('mailto:cesar.hertz@icloud.com')}
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
        Day / Night Theme
      </motion.button>
    </motion.div>
  );
};

export default Sidebar;
