const ServiceCard = lazy(() => import("../components/ServiceCard"));
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { services } from "../data";
import { Service } from "../types";
import { motion } from "framer-motion";
import { lazy } from "react";
import "../styles/globals.css";


export default function Index() {
    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
  
          <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="h-full col-span-12 p-4 text-base text-center bg-white
           dark:bg-dark-500 border dark:border-orange
            lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
            <Sidebar />
          </motion.div>
          <div className="flex flex-col col-span-12 overflow-hidden
          border dark:border-orange
          bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
            <Navbar />
          <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="flex flex-col flex-grow px-6 pt-1 ">
                <h6 className="my-3 text-base font-medium">
                    After  <strong>6 years between Europe</strong> &amp;  <strong>China</strong> in the web industry,
                    I wish to take on agile, innovative &amp; ambitious projects.
                    A to Z tech projects with close user involvement are the most fulfilling.
                    Through a <strong>dozen MERN stack</strong> projects, I have contributed to different
                    architectures, designs and methods. I wish to focus on projects that
                    have a positive impact and great growth potential.
                </h6>
                <div
                    className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
                    style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
                >
                    <h4 className="my-3 text-xl font-semibold tracking-wide">
                        What I am doing
                    </h4>

                    <div className="grid gap-6 my-3 md:grid-cols-2">
                        {services.map((service) => (
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                                key={service.title}
                            >
                                <ServiceCard service={service} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            </div>
            </motion.div>
    )
}
