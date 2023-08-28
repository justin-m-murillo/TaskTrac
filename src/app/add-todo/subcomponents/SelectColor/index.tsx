import TodoItemContainer from '@/components/TodoItem/TodoItemContainer'
import React from 'react'

type SelectColorProps = {
  gradientList: string[],
  gradient: string,
  setGradient: React.Dispatch<React.SetStateAction<string>>,
}

const SelectColor = ({ gradientList, gradient, setGradient }: SelectColorProps) => {
  return (
    <div>
      <p className='text-sm'>Choose a color</p>
      <div className='grid grid-cols-4 py-4'>
        {gradientList.map((grad, index) => (
          <div key={index} className='h-16'>
            <div
              className={`${styles.root} ${grad === gradient ? styles.selected : null}`}
              onClick={() => { setGradient(grad) }}
            >
              <TodoItemContainer gradient={grad}>
                <div className='font-semibold'>Title</div>
              </TodoItemContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectColor

const styles = {
  root: 'flex flex-row items-center mx-1 px-1 py-2',
  selected: 'border-b-2 border-sky-500'
}