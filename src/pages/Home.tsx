import { Suspense } from 'react';
import { Seo } from '@/components/layout/Seo';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Spinner } from '@/components/ui/Spinner';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { GithubStats } from '@/components/sections/GithubStats';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

function SectionFallback() {
  return (
    <div className="flex justify-center py-16">
      <Spinner />
    </div>
  );
}

export function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <Education />
        <Achievements />
        <GithubStats />
        <Resume />
        <Contact />
      </Suspense>
    </>
  );
}
