import React from 'react'
import TextRowSelector from '@/components/TextRowSelector'
import TextRowOption from '@/components/TextRowSelector/TextRowOption'
import initDueDate from '@/utils/initDueDate'
import { DueDatePageProps } from '@/types/DueDatePageProps'


const NoShowDueDateSelector = ({ option, setDueDate, setShowDueDate }: DueDatePageProps) => {
  return (
    <TextRowSelector>
      <TextRowOption 
        option={option} 
        onClick={() => {
          setDueDate(initDueDate())
          setShowDueDate(true)
        }}
      />
    </TextRowSelector>
  )
}

export default NoShowDueDateSelector