import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  try {
    // Purge any legacy localStorage value to guarantee fresh link opens start in dark mode
    window.localStorage.removeItem(STORAGE_KEY);
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // Ignore storage errors in restricted environments
  }

  return 'dark';
}

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');

    try {
      window.sessionStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#F1F4F8' : '#0B1120');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
