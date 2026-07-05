import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('card-surface p-5 sm:p-6', className)} {...rest}>
      {children}
    </div>
  );
}
