import React, { ReactNode } from 'react'

export interface GridProps {
  grid?: string
  subPart?: string
  className?: string
  children?: ReactNode
}

export interface GridEntryProps {
  subPart: string
  value?: string
  className?: string
}

export const Grid = ({ grid, subPart, className, children }: GridProps) => {
  return (
    <div className={`${grid && `grid ${grid}`} ${subPart && `${subPart}`} ${className}`}>
      { children }
    </div>
  )
}

export const GridEntry = ({ subPart, value, className }: GridEntryProps) => {
  if (value) return <p className={`${subPart} ${className}`}>{value}</p>
  else return null
}