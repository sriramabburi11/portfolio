import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={isLight}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300 transition-colors hover:border-accent-400 hover:text-accent-400"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
