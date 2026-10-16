import { useState, useEffect } from 'react';
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
    <section id="contact" className="scroll-mt-24 py-24 section-alt border-y border-transparent light:border-[#DCE3EC]/60">
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
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-300 light:text-[#374151]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className="w-full rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-all focus:border-accent-400 light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#1F2937] light:placeholder-slate-400 light:focus:bg-white light:focus:border-indigo-600 light:focus:ring-4 light:focus:ring-indigo-500/10"
                  {...register('name', { required: 'Please enter your name.' })}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-signal-amber light:text-red-700">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-300 light:text-[#374151]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@domain.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className="w-full rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-all focus:border-accent-400 light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#1F2937] light:placeholder-slate-400 light:focus:bg-white light:focus:border-indigo-600 light:focus:ring-4 light:focus:ring-indigo-500/10"
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-signal-amber light:text-red-700">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-300 light:text-[#374151]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className="w-full resize-none rounded-lg border border-navy-600/70 bg-navy-900/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-all focus:border-accent-400 light:border-[#DCE3EC] light:bg-[#FAFBFD] light:text-[#1F2937] light:placeholder-slate-400 light:focus:bg-white light:focus:border-indigo-600 light:focus:ring-4 light:focus:ring-indigo-500/10"
                  {...register('message', {
                    required: 'Please add a short message.',
                    minLength: { value: 10, message: 'Message should be at least 10 characters.' },
                  })}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-signal-amber light:text-red-700">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? <Spinner /> : <Send size={16} />}>
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-ink-400 hover:text-accent-400 light:text-[#4B5563] light:hover:text-indigo-600 transition-colors"
                >
                  <Mail size={14} /> {SITE.email}
                </a>
              </div>

              {status === 'success' && (
                <p
                  role="status"
                  className="rounded-lg border border-signal-green/30 bg-signal-green/10 p-3.5 text-sm font-medium text-signal-green light:border-emerald-200/90 light:bg-emerald-50/90 light:text-emerald-800"
                >
                  Message sent. Thanks for reaching out — I'll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="rounded-lg border border-signal-amber/30 bg-signal-amber/10 p-3.5 text-sm font-medium text-signal-amber light:border-red-200/90 light:bg-red-50/90 light:text-red-800"
                >
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
