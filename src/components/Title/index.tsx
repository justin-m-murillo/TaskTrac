import React from 'react'

type Props = {
  title: string,
}

const Title = ({ title }: Props) => {
  return (
    <h1 className='text-2xl'>{title}</h1>
  )
}

export default Title