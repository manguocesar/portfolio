'use client';

import { useEffect } from 'react';
export const DarkMode = ({ children }) => {
  useEffect(() => {
    // Check if dark mode is set in localStorage or elsewhere
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <>{children}</>;
};
