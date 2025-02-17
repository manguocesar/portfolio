import { Service } from '../types';
import { ServiceCard } from './service-card';

export const Services = ({ services }: { services: Service[] }) => {
  return (
    <div className="dark:bg-dark-100 flex-grow bg-gray-400 p-4 sm:mt-5">
      <h4 className="my-1 text-2xl font-bold tracking-wide transition duration-1000 ease-in-out hover:text-white">
        What I do:
      </h4>
      <div className="my-3 grid gap-6 sm:grid-cols-2">
        {services.map(service => (
          <div
            className="dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 transition duration-1000 ease-in-out hover:opacity-70 sm:col-span-1"
            key={service.title}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};
