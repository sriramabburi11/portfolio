import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { EDUCATION } from '@/data/education';

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading index="04 education" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-2xl"
        >
          <Card className="flex items-start gap-4 p-6 sm:p-7">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 light:border light:border-indigo-100 light:bg-indigo-50/80 light:text-indigo-600">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="text-base font-bold text-ink-50">
                {EDUCATION.degree}, {EDUCATION.field}
              </h3>
              <p className="mt-1 text-sm font-semibold text-ink-200">{EDUCATION.institution}</p>
              <p className="mt-1 text-sm text-ink-300">{EDUCATION.college}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-400">
                <span className="inline-flex items-center rounded-md bg-navy-700/50 light:bg-[#E8EEF5] light:border light:border-[#DCE3EC] px-2.5 py-1">
                  graduation: {EDUCATION.graduationYear}
                </span>
                <span className="inline-flex items-center rounded-md bg-navy-700/50 light:bg-[#E8EEF5] light:border light:border-[#DCE3EC] px-2.5 py-1">
                  cgpa: {EDUCATION.cgpa}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
