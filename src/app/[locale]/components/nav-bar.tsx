'use client';

import { MotionWrapper } from '../components/MotionWrapper';
import { Link } from '../../../i18n/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';

type NavbarProps = {
  active: string;
  setActive: (name: string) => void;
  name: string;
  route: string;
};

const NavItem = ({ active, setActive, name, route }: NavbarProps) => {
  const t = useTranslations('NavBar');
  return (
    <>
      {active.toLowerCase().includes(name) ? undefined : (
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
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    const pathToActiveMap: { [key: string]: string } = {
      '/en': 'About',
      '/zh': 'About',
      'en/projects': 'Projects',
      'zh/projects': 'Projects',
      'en/resume': 'Resume',
      'zh/resume': 'Resume',
    };

    const activeName = pathToActiveMap[pathname];
    if (activeName) {
      setActive(activeName);
    }
  }, [pathname]);

  return (
    <MotionWrapper.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="my-2 flex items-center justify-between px-5 py-1 md:pr-1"
    >
      <span className="border-orange border-b-4 text-xl font-bold md:text-2xl">
        {active.includes('About') && t('about')}
        {active.includes('projects') && t('projects')}
        {active.includes('resume') && t('resume')}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="about" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="projects"
          route="/projects"
        />

        <LanguageSwitcher pathname={pathname} />
      </div>
    </MotionWrapper.div>
  );
};
