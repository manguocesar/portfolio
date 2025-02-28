import React from 'react';
import { technos, tools } from '../../data';
import { Bar } from '../components/namebar';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('Resume');
  return (
    <div className="px-6 py-2">
      <div className="grid gap-5 sm:grid-cols-8">
        <div className="col-span-3">
          <h5 className="hover:text-orange hidden text-2xl font-bold transition duration-1000 ease-in-out sm:my-3 sm:block">
            {t('education')}
          </h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              {t('master')}
            </h5>
            <p className="font-semibold">{t('masterDetails')}</p>
            <p className="sm:my-3">
              {t('thesis')}
            </p>
          </div>
        </div>
        <div className="col-span-5 hidden sm:block">
          <h5 className="hover:text-orange text-2xl font-bold transition duration-1000 ease-in-out sm:my-3">
            {t('softwareDeveloper')}
          </h5>
          <p className="hover:text-gray-1000·my-3·transition·duration-1000·ease-in-out">
            {t('first')}
            {t('second')}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-9">
        <div>
          <h5 className="hover:text-orange my-3 text-2xl font-bold transition duration-1000 ease-in-out">
            {t('technos')}
          </h5>
          <div className="my-2">
            {technos.map((tech, index) => (
              <Bar value={tech} key={index} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="hover:text-orange my-3 text-2xl font-bold transition duration-1000 ease-in-out">
            {t('tools')}
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
