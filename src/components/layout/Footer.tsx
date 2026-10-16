import { Github, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SITE, SOCIALS } from '@/constants/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700/70 light:border-slate-200/90 light:bg-slate-50/50">
      <Container className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-ink-100">{SITE.name}</p>
          <p className="mt-1 text-xs text-ink-400">
            © {year} · Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300 transition-all duration-200 hover:border-accent-400 hover:text-accent-400 light:border-slate-200/90 light:bg-white light:text-slate-600 light:hover:border-slate-300 light:hover:text-indigo-600 light:shadow-xs active:scale-95"
          >
            <Github size={16} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-600/70 text-ink-300 transition-all duration-200 hover:border-accent-400 hover:text-accent-400 light:border-slate-200/90 light:bg-white light:text-slate-600 light:hover:border-slate-300 light:hover:text-indigo-600 light:shadow-xs active:scale-95"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
