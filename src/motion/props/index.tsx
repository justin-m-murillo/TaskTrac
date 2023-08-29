
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
    stiffness: 100,
  }
}