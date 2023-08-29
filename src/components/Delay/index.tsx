import React, { ReactNode, useState, useEffect } from 'react'

type Props = {
  delay: number
  children: ReactNode
}

const Delay = ({ delay, children }: Props) => {
  const [ isDone, setIsDone ] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), delay)
    return () => clearTimeout(timer)
  }, [])

  return isDone && <>{children}</>
}

export default Delay