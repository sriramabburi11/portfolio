import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 focus-visible:outline-accent-400',
  secondary:
    'border border-navy-500 text-ink-100 hover:border-accent-400 hover:text-accent-400',
  ghost: 'text-ink-300 hover:text-accent-400',
};

const SIZE_STYLES: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50';

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
    return (
      <a className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
