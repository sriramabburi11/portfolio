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
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden !p-0">
        <div className="relative overflow-hidden border-b border-navy-700/60 light:border-slate-100 bg-navy-950/40 light:bg-slate-50">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-48 sm:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {isInProgress && (
            <span className="absolute right-3 top-3 rounded-md border border-signal-amber/40 bg-navy-900/80 px-2.5 py-1 font-mono text-xs font-medium text-signal-amber light:border-amber-200/90 light:bg-amber-50/90 light:text-amber-800 light:shadow-xs">
              In Progress
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-ink-50 transition-colors group-hover:text-accent-400">
            {project.title}
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-300 font-normal">
            {project.description}
          </p>

          <div className="mt-5">
            <p className="eyebrow">stack</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-5 flex-1">
            <p className="eyebrow">features</p>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-xs text-ink-300 font-normal"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400 light:bg-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-navy-700/60 light:border-slate-100">
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
              className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-ink-300 transition-colors duration-200 hover:text-accent-400 light:text-slate-600 light:hover:text-indigo-600 light:hover:bg-indigo-50/70"
            >
              <Info size={14} />
              Details
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
