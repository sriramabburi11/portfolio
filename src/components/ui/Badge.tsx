import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'default' | 'accent' | 'amber';
  className?: string;
}

const TONE_STYLES: Record<NonNullable<BadgeProps['tone']>, string> = {
  default:
    'border-navy-600/70 bg-navy-700/60 text-ink-300 light:border-slate-200/90 light:bg-slate-100/90 light:text-slate-700 light:font-medium light:hover:border-slate-300',
  accent:
    'border-accent-500/40 bg-accent-500/10 text-accent-400 light:border-indigo-200/80 light:bg-indigo-50/80 light:text-indigo-700 light:font-medium light:hover:border-indigo-300',
  amber:
    'border-signal-amber/40 bg-signal-amber/10 text-signal-amber light:border-amber-200/80 light:bg-amber-50/80 light:text-amber-800 light:font-medium',
};

export function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs sm:text-[13px] transition-colors',
        TONE_STYLES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
