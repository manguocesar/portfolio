import Navbar from '../components/nav-bar';
import Sidebar from '../components/side-bar';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

import type { Metadata, Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Cesar 何赛 Portfolio',
  },
  metadataBase: new URL('https://cesarhertz.com'),
  description: 'Showcasing work & projects',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next15', 'pwa', 'next-pwa'],
  icons: [
    { rel: 'apple-touch-icon', url: '/imageLaptop.webp' },
    { rel: 'icon', url: '/imageLaptop.webp' },
  ],
};

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-tr from-blue-800 to-orange bg-fixed dark:from-dark-100 dark:to-dark-700 dark:text-white">
        <div className={inter.className}>
          <div className="my-8 grid grid-cols-12 gap-6 px-5 md:mb-16 md:px-32 lg:mb-0 lg:px-10 lg:pb-5 xl:px-48">
            <div className="col-span-12 h-full rounded-2xl border bg-white py-4 text-center text-base shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-3">
              <Sidebar />
            </div>
            <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-white shadow-custom-light dark:border-orange dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
