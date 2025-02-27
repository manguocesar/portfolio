import { Service } from '../types';

export const ServiceCard: React.ComponentType<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  return (
    <div className="flex items-center space-x-4 rounded-lg p-2 dark:bg-gray-800">
      <Icon className="text-orange h-20 w-1/6 sm:h-24" />
      <div className="w-5/6">
        <h6 className="font-bold">{title}</h6>
        <p>{about}</p>
      </div>
    </div>
  );
};
