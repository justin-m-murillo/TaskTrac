import React from 'react'

type Props = {
  option: string,
  isActive?: boolean,
  onClick: () => void
}

const TextRowOption = ({ option, isActive, onClick}: Props) => {
  return (
    <div
      className={`${styles.option} ${isActive && styles.isActive}`}
      onClick={onClick}
    >
      <p>{option}</p>
    </div>
  )
}

export default TextRowOption

const styles = {
  option: 'mr-2 underline underline-offset-2 cursor-pointer select-none hover:text-sky-500',
  isActive: 'text-sky-500'
}