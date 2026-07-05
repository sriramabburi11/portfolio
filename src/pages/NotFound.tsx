import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Seo } from '@/components/layout/Seo';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-2xl font-semibold">
          This page doesn't exist.
        </h1>
        <p className="mt-2 text-sm text-ink-400">
          The route you followed may be broken, or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent-400 hover:underline"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </Container>
    </>
  );
}
