'use client';

import React from 'react';

const changeTheme = async () => {
  document.documentElement.classList.toggle('dark');
};

const Button = ({ title }: { title: string }) => {
  return (
    <button
      onClick={() => {
        title === 'Email me'
          ? window.open('mailto:cesar.hertz@icloud.com')
          : changeTheme();
      }}
      data-cy="change-theme"
      className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 to-orange my-1 w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-tr from-blue-800 px-5 py-2 text-white focus:outline-none sm:my-4"
    >
      {title}
    </button>
  );
};

export default Button;
