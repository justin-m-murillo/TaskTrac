import React, { ReactNode } from 'react'

type TextRowSelectorProps = {
  prompt?: string,
  children?: ReactNode,
}

const TextRowSelector = ({ prompt, children }: TextRowSelectorProps) => {
  return (
    <div className='flex flex-row mb-2'>
      <div className='flex flex-row text-sm'>
      {prompt && <p className='mr-2'>{prompt}</p>}
      { children }
      </div>
    </div>
  )
}

export default TextRowSelector