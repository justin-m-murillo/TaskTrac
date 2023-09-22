import { useState, useEffect } from 'react'

export const useTodoItemBG = (index: number) => {
  const [ gradient, setGradient ] = useState<string>('')

  useEffect(() => {
    const gradientList = [
      'from-green-500 to-blue-600',
      'from-rose-400 to-pink-400',
      'bg-gradient-to-tr from-red-600 to-amber-400'
    ]
    setGradient(gradientList[index])
  }, [index])
  

  return gradient
}