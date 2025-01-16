const ServiceCard = lazy(() => import('../components/service-card'));
import '../styles/globals.css';

import { motion } from 'framer-motion';
import { lazy } from 'react';

import Navbar from '../components/nav-bar';
import Sidebar from '../components/side-bar';
import { services } from '../data';

export default function Index() {
  return (
    // <motion.div
    //   initial={{ y: 20, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ ease: 'easeInOut', duration: 0.75 }}
    //   className="my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48"
    // >
    //   <motion.div
    //     initial={{ y: -20, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{ ease: 'easeInOut', duration: 0.75 }}
    //     className="col-span-12 h-full rounded-2xl border bg-white p-4 text-center text-base shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-3"
    //   >
    //     <Sidebar />
    //   </motion.div>
    // <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-white shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
    //   <Navbar />
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="flex flex-grow flex-col px-6 pt-1"
    >
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
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.97 }}
              className="col-span-2 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    // </div>
    // </motion.div>
  );
}
