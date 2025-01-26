import React from 'react';
import { technos, tools } from '../../data';
import Bar from '../../components/namebar';

const Page = () => {
  const softwareIntro =
    'Lucky to work with cutting edge technologies and talented engineers. The digital communities in Copenhagen, Lyon, Shanghai and Brussels have opened the door to the latest technologies & innovations, inspiring me to work with like-minded entrepreneurs.';

  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h5 className="hidden text-2xl font-bold sm:my-3 sm:block">
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
        <div className="hidden sm:block">
          <h5 className="text-2xl font-bold sm:my-3">Software Developer</h5>
          <div className="">
            <p className="my-3 text-sm">{softwareIntro}</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-9">
        <div>
          <h5 className="my-3 text-2xl font-bold">Technos</h5>
          <div className="my-2">
            {technos.map((tech, index) => (
              <Bar value={tech} key={index} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
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
