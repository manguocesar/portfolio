'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavbarProps = {
  active: string;
  setActive: (name: string) => void;
  name: string;
  route: string;
};

const NavItem = ({ active, setActive, name, route }: NavbarProps) => {
  return (
    <>
      {active === name ? undefined : (
        <Link href={route} data-test-id={`cypress-nav-${name}`}>
          <span
            className="hover:text-orange mx-2 cursor-pointer hover:border-b-4"
            onClick={() => setActive(name)}
          >
            {name}
          </span>
        </Link>
      )}
    </>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/': {
        setActive('About');
        break;
      }
      case '/projects': {
        setActive('Projects');
        break;
      }
      case '/resume': {
        {
          setActive('Resume');
          // No default
        }
        break;
      }
    }
  }, [pathname]);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="my-2 flex items-center justify-between px-5 py-1"
    >
      <span className="border-orange border-b-4 text-xl font-bold md:text-2xl">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
