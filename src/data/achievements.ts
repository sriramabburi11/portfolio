import { Trophy, GitBranch, FolderGit2, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

export interface Achievement {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  note?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'leetcode',
    label: 'LeetCode Problems Solved',
    value: '150+',
    icon: Trophy,
  },
  {
    id: 'github-contributions',
    label: 'GitHub Contributions',
    value: '40+',
    icon: GitBranch,
  },
  {
    id: 'projects-built',
    label: 'Projects Built',
    value: `${PROJECTS.length}`,
    icon: FolderGit2,
  },
  {
    id: 'hackathons',
    label: 'Hackathons',
    value: 'Build To Ship',
    icon: Award,
    note: 'By NIAT',
  },
];
