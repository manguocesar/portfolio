import { useTranslations } from 'next-intl';
import { Service } from '../types';

export const ServiceCard: React.ComponentType<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  const t = useTranslations('About');
  return (
    <div className="flex items-center space-x-4 rounded-lg p-2 dark:bg-gray-800">
      <Icon className="text-orange h-20 w-1/6 sm:h-24" />
      <div className="w-5/6">
        <h6 className="font-bold">{t(title)}</h6>
        <p>{t(about)}</p>
      </div>
    </div>
  );
};
