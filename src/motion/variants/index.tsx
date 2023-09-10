export const motionListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const detailsVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.5,
      delay: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'linear',
      duration: 0.2,
    }
  }
}