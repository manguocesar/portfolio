'use client';
import Image from 'next/image';
import React from 'react';
import { AiFillWechat } from 'react-icons/ai';

const Wechat = () => {
  const [wechat, setWechat] = React.useState(false);
  return (
    <>
      {wechat ? (
        <div
          onClick={() => setWechat(false)}
          className="border-orange left-0 w-3/12 cursor-pointer border-2"
        >
          <Image
            className=""
            width={300}
            height={300}
            alt="wechat-picture"
            src="/images/wechat.jpg"
          />
        </div>
      ) : (
        <div>
          <AiFillWechat
            className="h-8 w-8 cursor-pointer transition duration-1000 ease-in-out hover:scale-150"
            onClick={() => setWechat(true)}
          />
        </div>
      )}
    </>
  );
};

export default Wechat;
