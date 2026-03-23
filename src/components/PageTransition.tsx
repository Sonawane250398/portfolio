import type { Transition } from 'motion/react';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

type TransitionDef = {
  initial: Record<string, string | number>;
  animate: Record<string, string | number>;
  exit: Record<string, string | number>;
  transition: Transition;
};

/** Short, GPU-friendly transitions — no blur (costly) and sync mode in Layout avoids exit+enter stacking. */
const transitions: Record<string, TransitionDef> = {
  home: {
    initial: { opacity: 0, scale: 0.99 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.005 },
    transition: { duration: 0.25, ease },
  },
  about: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -14 },
    transition: { duration: 0.2, ease },
  },
  projects: {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.25, ease },
  },
  contact: {
    initial: { opacity: 0, y: 16, rotateX: 3 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -10, rotateX: -2 },
    transition: { duration: 0.25, ease },
  },
};

export function routeToPageId(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'home';
  const top = pathname.split('/').filter(Boolean)[0];
  if (top === 'about') return 'about';
  if (top === 'projects') return 'projects';
  if (top === 'contact') return 'contact';
  return 'home';
}

export function getPageTransition(pageId: string): TransitionDef {
  return transitions[pageId] ?? transitions.home;
}
