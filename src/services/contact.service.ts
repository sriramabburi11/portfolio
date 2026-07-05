import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/constants/site';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Submits the contact form via EmailJS.
 *
 * Requires three values from your EmailJS account (see README for the
 * step-by-step setup): a service ID, a template ID, and a public key,
 * supplied via environment variables so no secrets are hardcoded.
 */
export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
        'and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
    );
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      message: payload.message,
    },
    { publicKey },
  );
}