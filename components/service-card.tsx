import { FunctionComponent } from 'react';

import { Service } from '../types';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="flex items-center space-x-4 p-2">
      <Icon className="text-orange h-20 w-1/6 sm:h-24" />
      <div className="w-5/6">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
