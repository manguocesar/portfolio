import '../styles/globals.css';

import type { Metadata } from 'next';
import { Head, Html, NextScript } from 'next/document';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-tr from-blue-800 to-orange bg-fixed dark:from-dark-500 dark:to-dark-700 dark:text-white">
        {children}
        <NextScript />
      </body>
    </Html>
  );
}
