import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'default' | 'accent' | 'amber';
  className?: string;
}

const TONE_STYLES: Record<NonNullable<BadgeProps['tone']>, string> = {
  default: 'border-navy-600/70 bg-navy-700/60 text-ink-300',
  accent: 'border-accent-500/40 bg-accent-500/10 text-accent-400',
  amber: 'border-signal-amber/40 bg-signal-amber/10 text-signal-amber',
};

export function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs',
        TONE_STYLES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
