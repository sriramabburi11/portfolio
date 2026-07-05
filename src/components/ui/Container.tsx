import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={cn('container-page', className)} {...rest}>
      {children}
    </div>
  );
}
