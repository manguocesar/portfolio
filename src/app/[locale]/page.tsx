'use client';

import React, { Suspense } from 'react';
import { services } from '../data';
import { Shape } from './components/shape';
import { AboutIntro } from './components/about-intro';
import { Services } from './components/service';

const Page = () => {
    return (
        <Suspense fallback="Loading...">
            <div className="flex flex-row px-6">
                <AboutIntro />
                <Shape />
            </div>
            <Services services={services} />
        </Suspense>
    );
};

export default Page;
