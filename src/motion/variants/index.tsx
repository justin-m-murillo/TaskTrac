export const motionListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const motionListItemVariants = {
  hidden: { 
    opacity: 0,
    y: 100 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  },
}

export const detailsVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.2,
      delay: 0.5
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

export const tabListVariants = {
  hidden: { opacity: 0, },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  },
  exit: { opacity: 0, }
}

export const tabVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -50,
  }
}