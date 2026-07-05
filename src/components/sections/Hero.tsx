import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE, SOCIALS } from '@/constants/site';
import { scrollToId } from '@/utils/scroll';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-fade pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-md border border-navy-600/70 bg-navy-800/60 px-3 py-1.5 font-mono text-xs text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
            available for internships &amp; SDE roles
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {SITE.name}
          </h1>

          <p className="mt-4 font-mono text-base text-accent-400 sm:text-lg">
            {SITE.role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-400">
            {SITE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollToId('projects')} icon={<ArrowDown size={16} />}>
              View Projects
            </Button>
            <Button
              as="a"
              href={SITE.resumePath}
              download
              variant="secondary"
              icon={<Download size={16} />}
            >
              Download Resume
            </Button>
            <Button
              as="a"
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              icon={<Github size={16} />}
            >
              GitHub
            </Button>
            <Button
              as="a"
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              icon={<Linkedin size={16} />}
            >
              LinkedIn
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-2 font-mono text-xs text-ink-500">
            <span className="text-accent-400">$</span>
            <span>whoami</span>
            <span className="h-4 w-[2px] animate-blink bg-ink-500" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
