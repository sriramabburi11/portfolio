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
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-fade light:bg-grid-fade-light pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] light:bg-[linear-gradient(to_right,rgba(31,41,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,41,55,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-navy-600/70 bg-navy-800/60 px-3.5 py-1.5 font-mono text-xs text-ink-400 light:border-emerald-200/90 light:bg-emerald-50/90 light:text-emerald-800 light:shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green light:bg-emerald-600" />
            </span>
            available for internships &amp; SDE roles
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.1]">
            {SITE.name}
          </h1>

          <p className="mt-4 font-mono text-base font-semibold text-accent-400 sm:text-lg tracking-wide">
            {SITE.role}
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-ink-300 font-normal">
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

          <div className="mt-14 inline-flex items-center gap-2 rounded-md font-mono text-xs text-ink-400 light:bg-[#E8EEF5] light:border light:border-[#DCE3EC] light:px-2.5 light:py-1">
            <span className="font-bold text-accent-400">$</span>
            <span>whoami</span>
            <span className="h-4 w-[2px] animate-blink bg-ink-400" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
