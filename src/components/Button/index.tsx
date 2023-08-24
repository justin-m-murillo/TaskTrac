import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase';

export type ButtonProps = {
  Icon: IconType,
  hover?: string,
  onClick?: React.MouseEventHandler,
  buttonType?: string,
}

const Button = ({ Icon, hover, onClick, buttonType }: ButtonProps) => {
  const iconSize = 48
  const btnType = (() => {
    switch (buttonType) {
      case 'undefined':
        return undefined
      case 'submit':
        return 'submit'
      case 'reset':
        return 'reset'
      default:
        return 'button'
    }
  })();

  return (
    <button 
      type={btnType}
      onClick={onClick}
      className={`text-gray-400 transition duration-300 z-10 ${hover}`}
    >
      <Icon size={iconSize} />
    </button>
  )
}

export default Button