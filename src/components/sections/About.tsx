import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

const FOCUS_AREAS = [
  'Backend Development',
  'Full Stack Development',
  'AI-powered Applications',
  'REST API Design',
  'Database Design',
  'Scalable Systems',
  'Agentic AI & LLM Applications'
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading index="01 about" title="About" />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-ink-300">
              I'm a Computer Science undergraduate who enjoys working across the
              stack, with a particular focus on backend engineering. I like
              designing REST APIs and database schemas that hold up under real
              usage, and building full-stack applications where the frontend and
              backend genuinely fit together.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              A lot of my recent work sits at the intersection of scalable
              systems and AI-powered applications — thinking through
              authentication, caching, and multi-tenant architecture while also
              experimenting with how AI can make software more useful. I care
              about writing code that's easy to reason about, and I'm
              continuously learning, whether that's a new database pattern, a
              systems design concept, or a better way to structure a project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card>
              <p className="eyebrow">focus areas</p>
              <ul className="mt-4 space-y-2.5">
                {FOCUS_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-ink-300"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
