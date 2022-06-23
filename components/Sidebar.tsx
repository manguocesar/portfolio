import { AiFillGithub, AiFillLinkedin, AiFillWechat } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [wechat, setWechat]= useState(false)

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/cesar.png"
        alt="cesar hertz"
        className=" mx-auto border rounded-full "
        height="170px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-orange ">Cesar</span> 何赛
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/2022 CV César HERTZ.pdf"
        download="2022 CV César HERTZ.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-orange md:w-full ">
        {wechat ?
          <div onMouseOut={() => () => setWechat(false)} className="w-1/6 absolute">
            <img alt="wechat-picture" src="/images/wechat.jpg" />
          </div> :
          <AiFillWechat className="w-8 h-8 cursor-pointer" onMouseOver={()=>setWechat(true)}  />}
        <a href="https://www.linkedin.com/in/hertz-cesar/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/manguocesar">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Lyon &amp; Shanghai </span>
        </div>
        <p className="my-2 ">cesar.hertz@icloud.com</p>
        <p className="my-2">+33 6 78 95 22 65</p>
        <p className="my-2">+86 183 2148 1045</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-tr from-blue-800 to-orange hover:scale-105 focus:outline-none"
        onClick={() => window.open("cesar.hertz@icloud.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-tr from-blue-800 to-orange focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
