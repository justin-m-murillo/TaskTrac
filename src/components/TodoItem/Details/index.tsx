import React, { useState } from 'react'
import styles from './styles'
import { Field } from '@/types/Field'
import useFields from '@/hooks/useFields'
import { Todo } from '@/types/Todo'
import FieldTable from './FieldTable'

type DetailsProps = {
  todo: Todo
}

const Details = ({ todo }: DetailsProps) => {
  const fields = useFields(todo)
  const timeFields = fields.filter(field => field.key !== 'Location')
  const locField = fields.filter(field => field.key === 'Location')

  return (
    <div className={styles.detailsContainer}>
      <div className='grid grid-rows-1 sm:grid-cols-2'>
        <FieldTable fields={timeFields} />
        <FieldTable fields={locField} />
      </div>
      {todo?.description &&
        <div className={styles.listItemDesc}>
          <p>
            {todo.description}
          </p>
        </div>
      }
    </div>
  )
}

export default Details