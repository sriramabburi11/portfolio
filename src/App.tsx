import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { Home } from '@/pages/Home';
import { ProjectDetails } from '@/pages/ProjectDetails';
import { NotFound } from '@/pages/NotFound';
import { scrollToId } from '@/utils/scroll';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => scrollToId(id), 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
