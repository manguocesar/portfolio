import { FunctionComponent } from 'react';
import { Service } from '../types';
import { CircleCheckBig } from 'lucide-react';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { title, about },
}) => {
  return (
    <div className="flex items-center space-x-4 p-2">
      <CircleCheckBig className="text-orange h-20 w-1/6 sm:h-24" />
      <div className="w-5/6">
        <h6 className="font-bold">{title}</h6>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
