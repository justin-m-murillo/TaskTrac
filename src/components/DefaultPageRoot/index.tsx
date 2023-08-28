import React, { ReactNode } from 'react'

type DefaultPageRootProps = {
  children: ReactNode,
}

const DefaultPageRoot = ({ children }: DefaultPageRootProps) => {
  return (
    <div className={styles.root}>
      { children }
    </div>
  )
}

export default DefaultPageRoot

const styles = {
  root: 'flex flex-col gap-x-2 gap-y-4 px-5 py-8 text-white bg-gray-800 rounded-2xl',
}