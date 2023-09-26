'use client'
import React, { useState, useRef, MutableRefObject } from 'react'
import { useSession } from 'next-auth/react'

import { useTodoListContext } from '@/context/TodoListContext'
import styles from './styles'

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
import { useRouter } from 'next/navigation'
import onSubmitForm from './onSubmitForm'
import { SessionUser } from '@/types/next-auth'

const gradientList = [
  'from-sky-600 to-rose-500',
  'from-pink-900 to-blue-600',
  'from-violet-900 to-sky-500',
  'from-teal-600 to-purple-600',
]

const PageAddTodo = () => {
  const { todos, setTodos } = useTodoListContext();
  const { data: session } = useSession();
  const router = useRouter();
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
        onSubmit={(event) => {
          event.preventDefault();
          //console.log('on submit, user', session?.user?.email);
          onSubmitForm(
            session?.user?.email,
            formRef as MutableRefObject<HTMLFormElement>,
            dueDate,
            showDueDate,
            gradient,
            { todos, setTodos }
          )
          router.push('/');
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