export const SITE = {
  name: 'Sriram Abburi',
  role: 'Full Stack Developer | Agentic AI | LLM Applications',
  tagline:
    'I enjoy building scalable backend systems, AI & Full Stack Developer building intelligent applications with LLMs, RAG, and modern web technologies.',
  url: 'https://sriramabburi.dev',
  email: 'sriramabburi11@gmail.com',
  resumePath: '/resume.pdf',
} as const;

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
} as const;

export const SOCIALS = {
  github: 'https://github.com/sriramabburi11',
  linkedin: 'https://www.linkedin.com/in/sriramabburi11',
} as const;

export const GITHUB_USERNAME = 'sriramabburi11';

export const SEO_DEFAULTS = {
  title: `${SITE.name} — ${SITE.role}`,
  description:
    'Computer Science undergraduate specializing in backend and full-stack development, building scalable systems, REST APIs, and AI-powered applications.',
  ogImage: '/og-image.png',
} as const;
