import { FunctionComponent } from 'react';

import { Category } from '../types';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize font-semibold cursor-pointer hover:text-orange';
  if (active === value) className += ' text-orange';

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = props => {
  return (
    <div className="grid list-none grid-cols-3 gap-2 overflow-x-auto px-3 py-2 sm:flex sm:space-x-3">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="reactNative" {...props} />
      <NavItem value="tailwindcss" {...props} />
      <NavItem value="nextJS" {...props} />
      <NavItem value="CMS" {...props} />
      <NavItem value="express" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
