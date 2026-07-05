import { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { SITE } from '@/constants/site';
import { submitContactForm, type ContactPayload } from '@/services/contact.service';

type FormStatus = 'idle' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>();
  
  useEffect(() => {
    if (status === 'idle') return;
    const timer = setTimeout(() => setStatus('idle'), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = async (data: ContactPayload) => {
    setStatus('idle');
    try {
      await submitContactForm(data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          index="08 contact"
          title="Contact"
          description="Have a role, project, or question in mind? Send a message below."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-2xl"
        >
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className="w-full rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:border-accent-400"
                  {...register('name', { required: 'Please enter your name.' })}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs text-signal-amber">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className="w-full rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:border-accent-400"
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs text-signal-amber">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-ink-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className="w-full resize-none rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:border-accent-400"
                  {...register('message', {
                    required: 'Please add a short message.',
                    minLength: { value: 10, message: 'Message should be at least 10 characters.' },
                  })}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs text-signal-amber">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? <Spinner /> : <Send size={16} />}>
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-400 hover:text-accent-400"
                >
                  <Mail size={14} /> {SITE.email}
                </a>
              </div>

              {status === 'success' && (
                <p role="status" className="text-sm text-signal-green">
                  Message sent. Thanks for reaching out — I'll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm text-signal-amber">
                  The form isn't connected to a backend yet, so this couldn't be sent.
                  Feel free to email directly at {SITE.email} in the meantime.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
