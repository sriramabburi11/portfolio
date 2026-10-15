import type { SkillGroup } from '@/types/skill.types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['C++', 'JavaScript', 'Python'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    id: 'database',
    title: 'Database',
    items: ['SQL', 'MongoDB'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    items: ['Vercel', 'Postman'],
  },
  {
    id: 'core-cs',
    title: 'Core CS',
    items: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'DBMS'
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
      'Gradio',
      'Google Gemini',
    ],
  }
];
