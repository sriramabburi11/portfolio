import type { Project } from '@/types/project.types';

export const PROJECTS: Project[] = [
  {
    id: 'interview-assistant',
    title: 'Interview Assistant',
    status: 'completed',
    description:
      'AI-powered interview preparation platform helping users practice technical interviews.',
    longDescription:
      'Interview Assistant simulates real technical interview conditions, generating role-specific mock interviews and returning structured, actionable feedback so candidates can identify gaps and iterate quickly.',
    image: '/projects/interview-assistant.svg',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'AI Integration'],
    features: [
      'Authentication',
      'Mock Interviews',
      'AI Feedback',
      'Question Management',
      'Responsive Design',
    ],
    githubUrl: 'https://github.com/sriramabburi11/Interview-Assistant',
    liveUrl: 'https://huggingface.co/spaces/sriramabburi11/interview_assistant',
  },
  {
  id: 'personal-ai-advisor',
  title: 'Personal AI Advisor',
  status: 'completed',
  description:'An AI-powered personal assistant that provides intelligent conversations, personalized guidance, and context-aware responses using modern LLMs and agent frameworks.',
  longDescription: 'Personal AI Advisor is an intelligent conversational assistant built with Python, Gradio, LangChain, and Large Language Models. It leverages agent-based workflows to understand user queries, maintain conversational context, and deliver accurate, personalized responses through an interactive web interface.',
  image: '/projects/financial-advisor.svg',
  technologies: [
    'Python',
    'Gradio',
    'LangChain',
    'Google Gemini',
    'LLMs',
    'AI Agents'
  ],
  features: [
    'Conversational AI',
    'Context-Aware Responses',
    'Agent-Based Reasoning',
    'Interactive Gradio Interface',
    'LLM Integration',
    'Personalized Assistance'
  ],
  githubUrl: 'https://github.com/sriramabburi11/AI-Assistants-with-Gradio-Interface/blob/main/personal_financial_advisor',
  liveUrl: 'https://huggingface.co/spaces/sriramabburi11/personal_financial_advisor',
},
  {
    id: 'omnisupport-ai',
    title: 'OmniSupport AI',
    status: 'in-progress',
    description: 'AI-powered multi-tenant customer support platform.',
    longDescription:
      'OmniSupport AI is being built as a multi-tenant support desk with role-based access, ticket and conversation management, and Redis-backed caching, containerized for consistent deployments. Currently in active development — features below are being built incrementally.',
    image: '/projects/omnisupport-ai.svg',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'Docker',
      'JWT',
      'AI Integration',
      'LangChain',
      'Real-time Collaboration',
      'Multi-Tenant Architecture',
    ],
    features: [
      'Tenant Management',
      'Authentication',
      'REST APIs',
      'Role-based Authorization',
      'Conversation Management',
      'Ticket Management',
      'Redis Caching',
      'Dockerized Services',
    ],
    githubUrl: 'https://github.com/sriramabburi/omnisupport-ai',
    liveUrl: '',
  },
];
