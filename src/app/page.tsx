'use server';

import React, { Suspense } from 'react';
import { services } from './data';
import { Shape } from './components/shape';
import { Intro } from './components/intro';
import { Services } from './components/service';

const Page = async () => {
  return (
    <Suspense fallback="Loading...">
      <div className="flex flex-row px-6">
        <Intro />
        <Shape />
      </div>
      <Services services={services} />
    </Suspense>
  );
};

export default Page;
