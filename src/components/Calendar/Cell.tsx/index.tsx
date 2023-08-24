import React, { ReactNode } from 'react'

type Props = {
  className?: string,
  isActive?: boolean,
  onClick?: () => void,
  children?: ReactNode
}

const Cell = ({ className, isActive=false, onClick, children }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${styles.cell} 
        ${className} 
        ${!!onClick && 'cursor-pointer'}
        ${isActive && 'bg-sky-500 text-white font-semibold'}
        ${!!onClick && !isActive && 'hover:bg-gray-200'}
      `}>
      {children}
    </div>
  )
}

export default Cell

const styles = {
  cell: 'h-12 flex select-none items-center justify-center border-b border-r',
  btn: 'cursor-pointer hover:bg-gray-100 active:bg-sky-500',
}