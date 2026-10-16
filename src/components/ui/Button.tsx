import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 focus-visible:outline-accent-400 light:bg-indigo-600 light:text-white light:hover:bg-indigo-700 light:shadow-sm light:shadow-indigo-500/15 light:hover:shadow-md light:hover:shadow-indigo-500/20 light:focus-visible:outline-indigo-600 active:scale-[0.98]',
  secondary:
    'border border-navy-500 text-ink-100 hover:border-accent-400 hover:text-accent-400 light:border-slate-200/90 light:bg-white light:text-slate-700 light:hover:bg-slate-50 light:hover:border-slate-300 light:hover:text-indigo-600 light:shadow-xs active:scale-[0.98]',
  ghost:
    'text-ink-300 hover:text-accent-400 light:text-slate-600 light:hover:text-indigo-600 light:hover:bg-indigo-50/70 active:scale-[0.98]',
};

const SIZE_STYLES: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-xs sm:text-sm font-medium',
  md: 'px-5 py-2.5 text-sm sm:text-base font-medium',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(BASE, VARIANT_STYLES[variant], SIZE_STYLES[size], className);

  if (rest.as === 'a') {
    const { as: _as, ...anchorProps } = rest;
    void _as;
    return (
      <a className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  void _as;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
