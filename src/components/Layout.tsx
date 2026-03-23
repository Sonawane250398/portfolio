import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ProgressBar from './ProgressBar';
import { getPageTransition, routeToPageId } from './PageTransition';

export default function Layout() {
  const location = useLocation();
  const pageId = routeToPageId(location.pathname);
  const t = getPageTransition(pageId);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <Navbar />
      <main className="relative z-10 flex min-h-[calc(100dvh-4.75rem)] flex-col overflow-x-hidden md:min-h-[calc(100dvh-5.25rem)]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={location.pathname}
            className="flex w-full min-h-0 flex-1 flex-col"
            style={{ transformOrigin: 'center top', transformPerspective: 1100 }}
            initial={t.initial}
            animate={t.animate}
            exit={t.exit}
            transition={t.transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
