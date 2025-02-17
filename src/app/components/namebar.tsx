import { FunctionComponent } from 'react';

import { Skill } from '../types';
import { CircleCheckBig } from 'lucide-react';

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="dark:bg-black-500 dark:bg-dark-300 my-2 rounded-full bg-gray-300 text-white transition duration-1000 ease-in-out hover:scale-105 hover:text-gray-200">
      <div
        className="to-orange flex items-center rounded-full bg-gradient-to-tr from-blue-800 px-4 py-1"
        style={{
          width: bar_width,
        }}
      >
        <CircleCheckBig className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
