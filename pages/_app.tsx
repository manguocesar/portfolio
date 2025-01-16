import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';
import { ComponentProps, lazy, ReactNode } from 'react';
const Navbar = lazy(() => import('../components/nav-bar'));
const Sidebar = lazy(() => import('../components/side-bar'));

type ExistingThemeProviderProps = ComponentProps<typeof ThemeProvider> & {
  children: ReactNode;
};
const ThemeProviderExtended = (props: ExistingThemeProviderProps) => (
  <ThemeProvider {...props} />
);

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProviderExtended attribute="class">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className="col-span-12 h-full rounded-2xl border bg-white p-4 text-center text-base shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-3"
        >
          <Sidebar />
        </motion.div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-white shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </motion.div>
    </ThemeProviderExtended>
  );
}
