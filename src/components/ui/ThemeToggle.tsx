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
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300 transition-all duration-200 hover:border-accent-400 hover:text-accent-400 light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#4B5563] light:hover:border-slate-300 light:hover:text-indigo-600 light:shadow-xs active:scale-95"
    >
      {isLight ? <Moon size={16} className="text-[#1F2937]" /> : <Sun size={16} />}
    </button>
  );
}
