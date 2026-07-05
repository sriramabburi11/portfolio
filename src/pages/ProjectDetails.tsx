import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Seo } from '@/components/layout/Seo';
import { PROJECTS } from '@/data/projects';

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-2xl font-semibold">Project not found</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent-400 hover:underline"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Seo title={project.title} description={project.description} path={`/projects/${project.id}`} />

      <section className="pb-24 pt-32">
        <Container className="max-w-3xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink-400 hover:text-accent-400"
          >
            <ArrowLeft size={14} /> back to projects
          </Link>

          <div className="mt-6 overflow-hidden rounded-xl border border-navy-600/60">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            {project.status === 'in-progress' && (
              <span className="rounded-md border border-signal-amber/40 bg-signal-amber/10 px-2.5 py-1 font-mono text-xs text-signal-amber">
                In Progress
              </span>
            )}
          </div>

          <p className="mt-4 text-base leading-relaxed text-ink-300">
            {project.longDescription}
          </p>

          <div className="mt-8">
            <p className="eyebrow">tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} tone="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="eyebrow">features</p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-ink-300">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer" icon={<Github size={16} />}>
                View on GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<ExternalLink size={16} />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
