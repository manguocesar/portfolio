import { useTranslations } from 'next-intl';

export const AboutIntro = () => {
  const t = useTranslations('About');
  return (
    <h3 className="xl:10/12 my-3 hidden w-7/12 text-base font-medium transition duration-1000 ease-in-out hover:text-gray-500 md:block md:w-7/12 lg:w-9/12">
      {t('first')}
      {t('second')}
      {t('third')}
    </h3>
  )
}
