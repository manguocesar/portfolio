import '../styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cesar Portfolio',
  description: 'Showcasing work & projects',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next15", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icon-192x192.png" },
    { rel: "icon", url: "icon-192x192.png" },
  ],
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
