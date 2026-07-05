import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SKILL_GROUPS } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          index="02 skills"
          title="Skills"
          description="Tools and concepts I reach for regularly, grouped by where they show up."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <h3 className="text-sm font-semibold text-ink-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
