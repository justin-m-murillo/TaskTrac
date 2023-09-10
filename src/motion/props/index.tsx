
export const MotionTabControlsProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: 'tween', duration: 0.2 }
}

export const MotionListItemProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: 'spring',
    stiffness: 80,
    damping: 12,
  }
}

export const MotionFormInputProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    type: 'tween',
    duration: 0.8
  }
}

export const MotionButtonProps = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      type: 'tween', 
      delay: 0.3, 
      duration: 0.5 
    }
  }
}