'use server';

import React, { Suspense } from 'react';
import { services } from './data';
import { Shape } from './components/shape';
import { Introduction } from './components/introduction';
import { Services } from './components/service';

const Page = async () => {
  return (
    <Suspense fallback="Loading...">
      <div className="flex flex-row px-6">
        <Introduction />
        <Shape />
      </div>
      <Services services={services} />
    </Suspense>
  );
};

export default Page;
