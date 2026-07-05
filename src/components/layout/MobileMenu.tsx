import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '@/constants/navigation';
import { cn } from '@/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  activeId: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
  closeIcon: ReactNode;
}

export function MobileMenu({
  isOpen,
  activeId,
  onNavigate,
  onClose,
  closeIcon,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 mobile-menu-surface backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-16 items-center justify-end px-5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300"
            >
              {closeIcon}
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-10">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  'rounded-lg px-4 py-3.5 text-left font-mono text-sm',
                  activeId === item.id
                    ? 'mobile-menu-item-active'
                    : 'text-ink-400',
                )}
              >
                <span className="mr-3 text-accent-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
