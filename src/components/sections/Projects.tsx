import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { PROJECTS } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          index="03 projects"
          title="Projects"
          description="A selection of things I've built end to end, from schema design to the UI on top."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
