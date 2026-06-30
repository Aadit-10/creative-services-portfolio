export const animationConfig = {
  entrance: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  hover: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  scroll: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
}

export const staggerChildren = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: animationConfig.entrance,
    },
  },
}

export const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
