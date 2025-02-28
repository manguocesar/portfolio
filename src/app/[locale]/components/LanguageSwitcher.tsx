import { Link } from "@/i18n/navigation";

export const LanguageSwitcher = ({ pathname }: { pathname: string }) => {
    return (
        <>
            {pathname.includes('/en') && (
                <Link
                    href={pathname.replace('/en', '/')}
                    className="from-blue-800 to-orange bg-gradient-to-tr rounded-full p-2 hover:border-orange border-white border"
                    locale="zh"
                >
                    <button className="w-6 h-6 cursor-pointer">🇨🇳</button>
                </Link>
            )}
            {pathname.includes('/zh') && (
                <Link
                    href={pathname.replace('/zh', '/')}
                    className="from-blue-800 to-orange bg-gradient-to-tr rounded-full p-2 hover:border-orange border-white border"
                    locale="en"
                >
                    <button className="w-6 h-6 cursor-pointer">🇬🇧</button>
                </Link>
            )}
        </>
    );
};