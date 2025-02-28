'use client';

import { motion } from 'framer-motion';
import { Link } from '../../../i18n/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type NavbarProps = {
  active: string;
  setActive: (name: string) => void;
  name: string;
  route: string;
};

const NavItem = ({ active, setActive, name, route }: NavbarProps) => {
  const t = useTranslations('NavBar');
  console.log(active, name);

  return (
    <>
      {active.toLowerCase() === name ? undefined : (
        <Link href={route} data-test-id={`cypress-nav-${name}`}>
          <span
            className="hover:text-orange mx-2 cursor-pointer hover:border-b-4"
            onClick={() => setActive(name)}
          >
            {t(name.toLowerCase())}
          </span>
        </Link>
      )}
    </>
  );
};

export const Navbar = () => {
  const t = useTranslations('NavBar');
  const pathname = usePathname();
  const [active, setActive] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/en': {
        setActive('About');
        break;
      }
      case '/zh': {
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
        {t(active.toLowerCase())}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name='about' route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name='resume'
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='projects'
          route="/projects"
        />

        {pathname.includes('/en') && <Link href="/" locale="zh">{t('chinese')}</Link>}
        {pathname.includes('/zh') && <Link href="/" locale="en">{t('english')}</Link>}
      </div>
    </motion.div>
  );
};
