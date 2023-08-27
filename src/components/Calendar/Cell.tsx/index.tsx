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
        ${!!onClick && styles.btn}
        ${isActive && styles.isActive}
        ${!!onClick && !isActive && styles.onHover}
      `}>
      {children}
    </div>
  )
}

export default Cell

const styles = {
  cell: 'h-11 flex select-none items-center justify-center border border-slate-500',
  btn: 'cursor-pointer',
  isActive: 'bg-sky-600 text-white font-semibold',
  onHover: 'hover:bg-slate-500',
}