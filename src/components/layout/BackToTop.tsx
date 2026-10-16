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
          className="fixed bottom-6 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/70 bg-navy-800/90 text-ink-200 shadow-card backdrop-blur transition-all duration-200 hover:border-accent-400 hover:text-accent-400 light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#4B5563] light:shadow-sm light:hover:border-slate-300 light:hover:text-indigo-600 light:hover:shadow-md sm:right-8 active:scale-95"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
