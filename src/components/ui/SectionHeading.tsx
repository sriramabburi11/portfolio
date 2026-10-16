import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  index,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <p className="eyebrow">{`// ${index}`}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-50 sm:text-3xl lg:text-[2.25rem] lg:leading-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[15px] sm:text-base leading-relaxed text-ink-300 font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}
