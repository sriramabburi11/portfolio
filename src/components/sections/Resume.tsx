import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/constants/site';

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading index="07 resume" title="Resume" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-2xl"
        >
          <Card className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 light:border light:border-indigo-100 light:bg-indigo-50/80 light:text-indigo-600">
                <FileText size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink-50">
                  {SITE.name} — Resume
                </h3>
                <p className="mt-1 text-xs font-mono text-ink-400">PDF · updated regularly</p>
              </div>
            </div>

            <Button
              as="a"
              href={SITE.resumePath}
              download
              icon={<Download size={16} />}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
