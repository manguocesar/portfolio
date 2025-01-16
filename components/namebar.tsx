import { FunctionComponent } from 'react';

import { Skill } from '../types';

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="dark:bg-black-500 my-2 rounded-full bg-gray-300 text-white dark:bg-dark-300">
      <div
        className="flex items-center rounded-full bg-gradient-to-tr from-blue-800 to-orange px-4 py-1"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
