import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <header className='w-screen flex items-center mb-4 bg-gray-100 justify-center'>
      {children}
    </header>
  )
}

export default Header