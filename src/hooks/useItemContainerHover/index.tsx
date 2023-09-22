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
  const [ motion, setMotion ] = useState<MotionProps|null>({
    height: 60,
    transition: {
      type: 'tween',
      duration: 0.1,
  }})

  useEffect(() => {
    let finHeight = 80
    if (todo?.location || todo?.dueDate || todo?.completed || todo?.deleted) {
      finHeight += 60
    }
    if (todo?.description) {
      finHeight += getHeightWithDesc(todo.description)
    }
    if (finHeight === motion?.height) {
      setMotion(null)
    }
    else {
      const newMotion:MotionProps = {
        height: finHeight,
        transition: {
          type: 'tween',
          duration: 0.1,
      }}
      setMotion(newMotion)
    }
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