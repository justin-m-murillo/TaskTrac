import { useState, useEffect } from 'react'
import { Todo } from '@/types/Todo'

interface MotionProps {
  height: number
  transition: {
    type: string,
    duration: number,
  }
}

const useItemContainerHover = (todo: Todo) => {
  const [ motion, setMotion ] = useState<MotionProps>({
    height: 60,
    transition: {
      type: 'tween',
      duration: 0.1,
  }})

  useEffect(() => {
    let height = motion.height;
    if (todo?.location || todo?.due_date || todo?.completed_at || todo.deleted_at) {
      if (todo?.description) {
        height = 280;
      } else {
        height = 150;
      }
    }
    else if (todo?.description) {
      height = 220;
    } else {
      height = 60;
    }
    
    setMotion({...motion, height});
  }, [todo])
 
  return motion
}

export default useItemContainerHover

const getHeightWithDesc = (
  description: string) => 
{
  const div = Math.floor(description.length/60)
  if (div === 0 || div === 1) {
    return 80
  } else {
    return 80 + (div * 20)
  }
}