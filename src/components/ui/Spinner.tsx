import { cn } from '@/utils/cn';

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block h-4 w-4 animate-spin rounded-full border-2 border-navy-500 border-t-accent-400 light:border-[#CBD5E1] light:border-t-[#4F46E5]',
        className,
      )}
    />
  );
}
