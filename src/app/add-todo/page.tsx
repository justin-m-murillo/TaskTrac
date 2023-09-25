'use client'
import React, { useState, useRef } from 'react'

import { useTodoListContext } from '@/context/TodoListContext'
import { useTodoNavContext } from '@/context/TodoNavContext'
import styles from './styles'

import { actionCreateTodo } from '@/actions/actionsTodo'
import { TodoDateTime } from '@/types/Todo'
import { FormAreaInput, FormTextInput } from '@/components/FormInput'
import ShowDueDateSelector from './subcomponents/ShowDueDateSelector'
import NoShowDueDateSelector from './subcomponents/NoShowDueDateSelector'
import SelectColor from './subcomponents/SelectColor'
import DefaultPageRoot from '@/components/DefaultPageRoot'

import { motion } from 'framer-motion'
import { MotionFormInputProps } from '@/motion/props'
import Delay from '@/components/Delay'
import initDueDate from '@/utils/initDueDate'

const gradientList = [
  'from-sky-800 to-rose-500',
  'from-red-800 to-fuchsia-600',
  'from-rose-800 to-orange-500',
  'from-fuchsia-900 to-green-600',
  'from-violet-950 to-sky-500',
  'from-sky-900 to-violet-500',
  'from-blue-900 to-green-600',
  'from-emerald-600 to-purple-400',
  'from-orange-600 to-purple-600',
  'from-pink-600 to-indigo-400',
]

const PageAddTodo = () => {
  const { setActiveTab } = useTodoNavContext()
  const { todos, setTodos } = useTodoListContext()
  const [ dueDate, setDueDate ] = useState<TodoDateTime>(initDueDate())
  const [ showDueDate, setShowDueDate ] = useState<boolean>(false)
  const [ gradient, setGradient ] = useState<string>(gradientList[0])
  
  const formRef = useRef<HTMLFormElement|null>(null)
  
  const maxTitleInputLength = 50
  const maxLocationInputLength = 55
  const maxAreaInputLength = 260
  
  return (
    <DefaultPageRoot minHeight={730}>
      <form
        ref={formRef}
        onSubmit={event => {
          event.preventDefault();
          const formData = new FormData(formRef.current as HTMLFormElement);
          const due = new Date(
            dueDate.year,
            dueDate.month,
            dueDate.day,
            dueDate.hours,
            dueDate.minutes,
          )
          
          const response = actionCreateTodo(
            formData, 
            showDueDate, 
            due,
            gradient,
            {todos, setTodos}
          ) 
          console.log("ADD TODO RES", response);
        }}
      >
        {/* Title */}
        <Delay delay={100}>
          <motion.div {...MotionFormInputProps}>
            <FormTextInput name='title' maxLength={maxTitleInputLength} />
          </motion.div>
        </Delay>

        {/* Location */}
        <Delay delay={300}>
          <motion.div {...MotionFormInputProps}>
            <FormTextInput name='location' maxLength={maxLocationInputLength} />
          </motion.div>
        </Delay>
        
        {/* Description */}
        <Delay delay={500}>
          <motion.div {...MotionFormInputProps} className='mb-4'>
            <FormAreaInput name='description' maxLength={maxAreaInputLength} />
          </motion.div>
        </Delay>
        
        {/* Select Due Date */}
        <Delay delay={700}>
          <motion.div {...MotionFormInputProps} className='mb-6'>
            {!showDueDate &&
              <div>
                <NoShowDueDateSelector 
                  option='Set a due date?'
                  setDueDate={setDueDate}
                  setShowDueDate={setShowDueDate}
                />
              </div>
            }
            {showDueDate && 
              <div>
                <ShowDueDateSelector
                  option='Cancel?'
                  dueDate={dueDate}
                  setDueDate={setDueDate}
                  setShowDueDate={setShowDueDate}
                />
              </div>
            }
          </motion.div>
        </Delay>

        <Delay delay={900}>
          <motion.div {...MotionFormInputProps}>
            <SelectColor
              gradientList={gradientList}
              gradient={gradient}
              setGradient={setGradient}
            />
          </motion.div>
        </Delay>

        <Delay delay={1100}>
          <motion.div className='flex mt-2 justify-end' {...MotionFormInputProps}>
            <button
              className={styles.button}
              type='submit'
            >
              Submit
            </button>
          </motion.div>
        </Delay>
      </form>
    </DefaultPageRoot>
  )
}

export default PageAddTodo