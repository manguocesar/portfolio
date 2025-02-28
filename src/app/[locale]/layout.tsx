import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Navbar } from './components/nav-bar';
import { Sidebar } from './components/side-bar';
import './styles/globals.css';
import { Inter } from 'next/font/google';

import type { Metadata, Viewport } from 'next';
import { DarkMode } from './dark-mode';

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

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <DarkMode>
          <body className={`${inter.className} layout-body`}>
            <Sidebar />
            <div
              className={`layout-content shadow-custom-light dark:shadow-custom-dark`}
            >
              <Navbar />
              {children}
            </div>
          </body>
        </DarkMode>
      </NextIntlClientProvider>
    </html>
  );
}
