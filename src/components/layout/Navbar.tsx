import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { NAV_ITEMS } from '@/constants/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToId } from '@/utils/scroll';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollProgress();
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  const handleNavigate = (id: string) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          isScrolled ? 'navbar-scrolled' : 'border-b border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="font-mono text-sm font-semibold text-ink-100 transition-colors hover:text-accent-400"
            aria-label="Go to home section"
          >
            <span className="text-accent-400 font-bold">~/</span>sriram-abburi
          </button>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-navy-700/70 bg-navy-800/60 p-1 lg:flex light:border-[#DCE3EC] light:bg-[#E8EEF5] light:shadow-xs"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  activeId === item.id
                    ? 'text-ink-50 font-semibold'
                    : 'text-ink-400 hover:text-ink-100',
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-navy-600/80 light:bg-[#FAFBFD] light:border light:border-[#DCE3EC] light:shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300 lg:hidden light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#4B5563] light:hover:border-slate-300 light:hover:text-indigo-600 light:shadow-xs active:scale-95"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        activeId={activeId}
        onNavigate={handleNavigate}
        onClose={() => setIsMenuOpen(false)}
        closeIcon={<X size={18} />}
      />
    </>
  );
}
