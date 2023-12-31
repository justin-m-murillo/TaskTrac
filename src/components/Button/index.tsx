import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase';
import { motion } from 'framer-motion'
import { MotionButtonProps } from '@/motion/props';
import { MotionButtonWhileHover } from '@/motion/gestures';

export type ButtonProps = {
  Icon: IconType
  size?: number
  onClick?: React.MouseEventHandler
  buttonType?: string
}

const Button = ({ Icon, onClick, size, buttonType }: ButtonProps) => {
  const iconSize = 24
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
    <motion.button 
      type={btnType}
      onClick={onClick}
      {...MotionButtonProps}
      whileHover={{ scale: 1.5 }}
      onMouseEnter={event => {
        event.stopPropagation()
      }}
      className={`text-white`}
    >
      <Icon size={size ?? iconSize} />
    </motion.button>
  )
}

export default Button