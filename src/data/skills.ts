import type { SkillGroup } from '@/types/skill.types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'database',
    title: 'Database',
    items: ['PostgreSQL', 'Prisma ORM', 'Redis'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    items: ['Docker', 'Git', 'GitHub'],
  },
  {
    id: 'core-cs',
    title: 'Core CS',
    items: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
  id: 'gen-ai',
  title: 'Generative AI',
  items: [
      'LLMs',
      'Agentic AI',
      'RAG',
      'Prompt Engineering',
      'LLM Evaluation',
      'LangChain',
      'LangGraph',
      'Gradio',
      'Google Gemini',
    ],
  }
];
