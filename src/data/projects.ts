import type { Project } from '@/types/project.types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer & ATS Optimizer',
    status: 'completed',
    description:
      'AI-powered resume analysis platform that evaluates resumes and provides actionable suggestions to improve ATS compatibility.',
    longDescription:
      'AI Resume Analyzer & ATS Optimizer helps students and job seekers improve their resumes by analyzing resume structure, content quality, and estimated ATS compatibility. Users can provide a job description to identify relevant keyword matches and skill gaps, receive AI-generated improvement suggestions, and discover missing resume sections to strengthen their applications.',
    image: '/projects/ai-resume-analyzer.svg',
    technologies: [
      'React.js',
      'Node.js',
      'Google Gemini API',
      'SQL',
      'AI Integration',
    ],
    features: [
      'Resume Upload and Analysis',
      'ATS Compatibility Scoring',
      'Resume Structure and Content Evaluation',
      'Job Description Matching',
      'Keyword and Skill Gap Detection',
      'AI-Powered Improvement Suggestions',
      'Temporary File Handling and Cleanup',
      'Responsive Design',
    ],
    githubUrl: 'https://github.com/sriramabburi11/AI-Resume-Analyzer',
    liveUrl: 'https://ai-resume-analyzer-nu-three-15.vercel.app/',
},
  {
    id: 'interview-assistant',
    title: 'Interview Assistant',
    status: 'completed',
    description:
      'AI-powered interview preparation platform helping users practice technical interviews.',
    longDescription:
      'Interview Assistant simulates real technical interview conditions, generating role-specific mock interviews and returning structured, actionable feedback so candidates can identify gaps and iterate quickly.',
    image: '/projects/interview-assistant.svg',
    technologies: ['Javascript', 'Python', 'AI Integration'],
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
  title: 'Personal AI Financial Advisor',
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
];
