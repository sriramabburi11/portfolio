import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToTop } from '@/utils/scroll';

export function BackToTop() {
  const isVisible = useScrollProgress(480);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/70 bg-navy-800/90 text-ink-200 shadow-card backdrop-blur hover:border-accent-400 hover:text-accent-400 sm:right-8"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
