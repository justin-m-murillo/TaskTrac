import React, { useState } from 'react'
import styles from './styles'
import { Field } from '@/types/Field'
import useFields from '@/hooks/useFields'
import { Todo } from '@/types/Todo'
import FieldTable from './FieldTable'

import { motion } from 'framer-motion'
import { detailsVariants } from '@/motion/variants'

type DetailsProps = {
  todo: Todo
}

const Details = ({ todo }: DetailsProps) => {
  const fields = useFields(todo)
  const timeFields = fields.filter(field => field.key !== 'Location')
  const locField = fields.filter(field => field.key === 'Location')

  return (
    <motion.div
      key={todo.id} 
      variants={detailsVariants}
      initial='hidden'
      animate='show'
      exit='exit'
      className={styles.detailsContainer}
    >
      <div className='grid grid-rows-1 sm:grid-cols-2'>
        {timeFields.length > 0 && <FieldTable fields={timeFields} />}
        {locField.length > 0 &&   <FieldTable fields={locField} />}
      </div>
      {todo?.description &&
        <div className={styles.listItemDesc}>
          <p>
            {todo.description}
          </p>
        </div>
      }
    </motion.div>
  )
}

export default Details