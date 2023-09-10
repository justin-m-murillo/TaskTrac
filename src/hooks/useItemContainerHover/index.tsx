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
  const base = {
    height: 60,
    transition: {
      type: 'tween',
      duration: 0.1,
  }}
  const [ motion, setMotion ] = useState<MotionProps|null>(base)

  useEffect(() => {
    let finHeight = 60
    if (todo?.location || todo?.dueDate || todo?.completed || todo?.deleted) {
      finHeight += 60
    }
    if (todo?.description) {
      finHeight += getHeightWithDesc(todo.description)
    }
    if (finHeight === base.height) {
      setMotion(null)
    }
    else {
      const newMotion = {
        ...base,
        height: finHeight
      }
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