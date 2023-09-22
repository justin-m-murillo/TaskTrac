import { useState, useEffect } from 'react'

export const useTodoItemBG = (index: number) => {
  const [ gradient, setGradient ] = useState<string>('')
  const gradientList = [
    'from-green-500 to-blue-600',
    'from-rose-400 to-pink-400',
    'bg-gradient-to-tr from-red-600 to-amber-400'
  ]

  useEffect(() => {
    setGradient(gradientList[index])
  }, [index, gradientList])
  

  return gradient
}