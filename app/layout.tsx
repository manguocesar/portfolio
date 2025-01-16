import '../styles/globals.css';

import type { Metadata } from 'next';

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
    <body className="bg-gradient-to-tr from-blue-800 to-orange bg-fixed dark:from-dark-500 dark:to-dark-700 dark:text-white">
      {children}
    </body>
  );
}
