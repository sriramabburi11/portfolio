import { motion } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/types/project.types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isInProgress = project.status === 'in-progress';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
    >
      <Card className="flex h-full flex-col overflow-hidden !p-0">
        <div className="relative">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-48 w-full object-cover"
          />
          {isInProgress && (
            <span className="absolute right-3 top-3 rounded-md border border-signal-amber/40 bg-navy-900/80 px-2.5 py-1 font-mono text-xs text-signal-amber">
              In Progress
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-ink-50">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">
            {project.description}
          </p>

          <div className="mt-4">
            <p className="eyebrow">stack</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="eyebrow">features</p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-xs text-ink-400"
                >
                  <span className="h-1 w-1 flex-shrink-0 rounded-full bg-ink-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-2">
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
                icon={<Github size={14} />}
              >
                GitHub
              </Button>
            )}
            {project.liveUrl ? (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                Live Demo
              </Button>
            ) : (
              <Button variant="secondary" size="sm" disabled icon={<ExternalLink size={14} />}>
                Live Demo
              </Button>
            )}
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-ink-300 transition-colors duration-200 hover:text-accent-400"
            >
              <Info size={14} />
              Project Details
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
