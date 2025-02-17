import Navbar from './components/nav-bar';
import Sidebar from './components/side-bar';
import './styles/globals.css';
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
      <body className={`${inter.className} layout-body`}>
        <Sidebar />
        <div
          className={`layout-content shadow-custom-light dark:shadow-custom-dark`}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
