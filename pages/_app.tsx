const Navbar = lazy(() => import ("../components/Navbar"));
const Sidebar = lazy(() => import ("../components/Sidebar"));

import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { ComponentProps, lazy, ReactNode} from 'react'

type ExistingThemeProviderProps = ComponentProps<typeof ThemeProvider> & {children: ReactNode};
const ThemeProviderExtended = (props: ExistingThemeProviderProps) => <ThemeProvider {...props}/>

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProviderExtended attribute="class">
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
          <Component {...pageProps} />
        </div>
      </motion.div>
    </ThemeProviderExtended>
  );
}

export default MyApp;
