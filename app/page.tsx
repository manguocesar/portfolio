'use server';

import React from 'react'
import ServiceCard from '../components/service-card';
import { services } from '../data';


const Page = async () => {
    return (
        <div className="flex flex-grow flex-col px-6 pt-1">
            <h6 className="my-3 text-base font-medium">
                After <strong>6 years between Europe</strong> &amp;{' '}
                <strong>China</strong> in the web industry, I wish to take on agile,
                innovative &amp; ambitious projects. A to Z tech projects with close
                user involvement are the most fulfilling. Through a{' '}
                <strong>dozen MERN stack</strong> projects, I have contributed to
                different architectures, designs and methods. I wish to focus on
                projects that have a positive impact and great growth potential.
            </h6>
            <div
                className="mt-5 flex-grow bg-gray-400 p-4 dark:bg-dark-100"
                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
                <h4 className="my-3 text-xl font-semibold tracking-wide">
                    What I am doing
                </h4>
                <div className="my-3 grid gap-6 md:grid-cols-2">
                    {services.map(service => (
                        <div
                            className="col-span-2 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 md:col-span-1"
                            key={service.title}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page