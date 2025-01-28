'use server';

import React, { Suspense } from 'react';
import ServiceCard from '../components/service-card';
import { services } from '../data';
import Shape from '../components/shape';

const introduction =
  'After 6 years between Europe China in the web industry, I wish to take on agile, innovative ambitious projects. A to Z tech projects with close user involvement are the most fulfilling. Through a dozen MERN stack projects, I have contributed to different architectures, designs and methods. I wish to focus on projects that have a positive impact and great growth potential.';

const Page = async () => {
  return (
    <div className="flex flex-grow flex-col px-6 pt-1">
      <div className="flex flex-row">
        <h6 className="xl:10/12 my-3 hidden w-7/12 text-base font-medium md:block md:w-7/12 lg:w-9/12">
          {introduction}
        </h6>
        <div className="xl:2/12 hidden h-54 md:block md:w-5/12 lg:h-44 lg:w-3/12">
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </div>
      </div>
      <div
        className="dark:bg-dark-100 flex-grow bg-gray-400 p-4 sm:mt-5"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-1 text-2xl font-bold tracking-wide">What I do:</h4>
        <div className="my-3 grid gap-6 sm:grid-cols-2">
          {services.map(service => (
            <div
              className="dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 transition duration-200 ease-in-out hover:opacity-70 sm:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
