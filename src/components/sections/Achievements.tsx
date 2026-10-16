import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { ACHIEVEMENTS } from '@/data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading index="05 achievements" title="Achievements" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full text-center p-6 sm:p-7 flex flex-col items-center justify-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 light:border light:border-indigo-100 light:bg-indigo-50/80 light:text-indigo-600">
                    <Icon size={20} />
                  </span>
                  <p className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-ink-50">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-ink-200">{item.label}</p>
                  {item.note && (
                    <p className="mt-2 font-mono text-[11px] text-ink-400">
                      {item.note}
                    </p>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
