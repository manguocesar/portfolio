import React from 'react';
import { technos, tools } from '../data';
import Bar from '../components/namebar';

const introduction = (
  <p className="hover:text-gray-1000·my-3·transition·duration-1000·ease-in-out">
    Throughout my career across{' '}
    <strong>Copenhagen, Lyon, Shanghai, and Brussels,</strong> I&apos;ve had the
    privilege of working with cutting-edge technologies and exceptional
    engineering teams. These diverse tech hubs have exposed me to innovative
    approaches and best practices in software development. My experience in
    these vibrant digital communities has shaped my expertise in modern web
    technologies and strengthened my passion for building impactful solutions
    with forward-thinking teams.
  </p>
);

const Page = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-5 sm:grid-cols-8">
        <div className="col-span-3">
          <h5 className="hover:text-orange hidden text-2xl font-bold transition duration-1000 ease-in-out sm:my-3 sm:block">
            Education
          </h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Master of Entrepreneurship &amp; Development
            </h5>
            <p className="font-semibold">Coventry University 2016 | 2018</p>
            <p className="sm:my-3">
              <strong>Thesis:</strong> How to lead digital transformation
              through KPIs?
            </p>
          </div>
        </div>
        <div className="col-span-5 hidden sm:block">
          <h5 className="hover:text-orange text-2xl font-bold transition duration-1000 ease-in-out sm:my-3">
            Software Developer
          </h5>
          {introduction}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-9">
        <div>
          <h5 className="hover:text-orange my-3 text-2xl font-bold transition duration-1000 ease-in-out">
            Technos
          </h5>
          <div className="my-2">
            {technos.map((tech, index) => (
              <Bar value={tech} key={index} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="hover:text-orange my-3 text-2xl font-bold transition duration-1000 ease-in-out">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool, index) => (
              <Bar value={tool} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
