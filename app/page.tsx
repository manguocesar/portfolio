'use server';

import React from 'react';
import ServiceCard from '../components/service-card';
import { services } from '../data';

const introduction =
  'After 6 years between Europe China in the web industry, I wish to take on agile, innovative ambitious projects. A to Z tech projects with close user involvement are the most fulfilling. Through a dozen MERN stack projects, I have contributed to different architectures, designs and methods. I wish to focus on projects that have a positive impact and great growth potential.';

const Page = async () => {
  return (
    <div className="flex flex-grow flex-col px-6 pt-1">
      <h6 className="my-3 hidden text-base font-medium sm:block">
        {introduction}
      </h6>
      <div
        className="dark:bg-dark-100 flex-grow bg-gray-400 p-4 sm:mt-5"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-1 text-2xl font-bold tracking-wide">What I do:</h4>
        <div className="my-3 grid gap-6 sm:grid-cols-2">
          {services.map(service => (
            <div
              className="dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 sm:col-span-1"
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
