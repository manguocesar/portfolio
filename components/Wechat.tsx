'use client'
import Image from 'next/image';
import React from 'react'
import { AiFillWechat } from 'react-icons/ai';

const Wechat = () => {
    const [wechat, setWechat] = React.useState(false);
  return (
    <>
     {wechat ? (
              <div
              onClick={() => setWechat(false)}
                className="absolute w-3/12 border-2 border-orange cursor-pointer">
                <Image width={300} height={300} alt="wechat-picture" src="/images/wechat.jpg" />
              </div>
            ) : (
              <div >
                <AiFillWechat
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => setWechat(true)}
                />
              </div>
            )}
              </>
  )
}

export default Wechat