import TodoItemContainer from '@/components/TodoItem/TodoItemContainer'
import { Todo } from '@/types/Todo'
import React from 'react'

type SelectColorProps = {
  gradientList: string[],
  gradient: string,
  setGradient: React.Dispatch<React.SetStateAction<string>>,
}

const SelectColor = ({ gradientList, gradient, setGradient }: SelectColorProps) => {
  const templateTodo: Todo = {
    id: 'templateTodo',
    user_id: 'templateTodo',
    title: 'TemplateTodo',
    description: null,
    location: null,
    due_date: null,
    bg_gradient: gradient,
    completed_at: null,
    deleted_at: null,
    created_at: "",
  }
  
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
              <TodoItemContainer todo={templateTodo} gradient={grad} isStatic>
                <div className='font-semibold select-none'>Title</div>
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