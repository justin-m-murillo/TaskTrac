import React from 'react'
import { DueDatePageProps } from '../../page'
import SetDueDate from '@/components/SetDueDate'
import TextRowSelector from '@/components/TextRowSelector'
import TextRowOption from '@/components/TextRowSelector/TextRowOption'


const ShowDueDateSelector = ({ option, dueDate, setDueDate, setShowDueDate }: DueDatePageProps) => {
  return (
    <div className='relative flex'>
      {dueDate && <SetDueDate dueDate={dueDate} setDueDate={setDueDate} />}
      <div className='absolute right-2'>
        <TextRowSelector>
          <TextRowOption 
            option={option}
            onClick={() => {
              setShowDueDate(false)
            }}
          />
        </TextRowSelector>
      </div>
    </div>
  )
}

export default ShowDueDateSelector