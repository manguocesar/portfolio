'use server';

import React, { Suspense } from 'react';
import ServiceCard from './components/service-card';
import { services } from './data';
import Shape from './components/shape';

const introduction = (
  <>
    With <strong>6 years of experience</strong> in the web industry across{' '}
    <strong>Europe and China</strong>, I specialize in developing innovative,
    user-centric solutions. I excel in managing end-to-end tech projects with a
    focus on agile methodologies and close stakeholder collaboration. My
    extensive experience with the MERN stack, coupled with exposure to diverse
    architectures and design patterns, enables me to deliver robust solutions. I
    am particularly passionate about projects that drive positive impact and
    demonstrate strong growth potential.
  </>
);

const Page = async () => {
  return (
    <div className="flex flex-grow flex-col pt-1">
      <div className="flex flex-row px-6">
        <h6 className="xl:10/12 my-3 hidden w-7/12 text-base font-medium transition duration-1000 ease-in-out hover:text-gray-500 md:block md:w-7/12 lg:w-9/12">
          {introduction}
        </h6>
        <div className="xl:2/12 hidden h-54 md:block md:w-5/12 lg:h-44 lg:w-3/12">
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </div>
      </div>
      <div className="dark:bg-dark-100 flex-grow bg-gray-400 p-4 sm:mt-5">
        <h4 className="my-1 text-2xl font-bold tracking-wide transition duration-1000 ease-in-out hover:text-white">
          What I do:
        </h4>
        <div className="my-3 grid gap-6 sm:grid-cols-2">
          {services.map(service => (
            <div
              className="dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 transition duration-1000 ease-in-out hover:opacity-70 sm:col-span-1"
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
