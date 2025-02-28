import { Link } from '@/i18n/navigation';

export const LanguageSwitcher = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {pathname.includes('/en') && (
        <Link
          href={pathname.replace('/en', '/')}
          className="to-orange hover:border-orange rounded-full border border-white bg-gradient-to-tr from-blue-800 p-2"
          locale="zh"
        >
          <button className="h-6 w-6 cursor-pointer">🇨🇳</button>
        </Link>
      )}
      {pathname.includes('/zh') && (
        <Link
          href={pathname.replace('/zh', '/')}
          className="to-orange hover:border-orange rounded-full border border-white bg-gradient-to-tr from-blue-800 p-2"
          locale="en"
        >
          <button className="h-6 w-6 cursor-pointer">🇬🇧</button>
        </Link>
      )}
    </>
  );
};
