import React, { useState } from 'react'
import styles from './styles'
import { Field } from '@/types/Field'
import useFields from '@/hooks/useFields'
import { Todo } from '@/types/Todo'
import { Grid, GridEntry } from '@/components/Grid'

import { motion } from 'framer-motion'
import { detailsVariants } from '@/motion/variants'

type DetailsProps = {
  todo: Todo
}

const Details = ({ todo }: DetailsProps) => {
  const fields = useFields(todo)

  return (
    <motion.div
      key={todo.id} 
      variants={detailsVariants}
      initial='hidden'
      animate='show'
      exit='exit'
      className={styles.detailsContainer}
    >
      <Grid grid='grid-rows-2' className='text-sm text-white'>
        {fields.map((field, index) => (
          <Grid key={index} subPart='row-span-1' grid='grid-cols-10'>
            <GridEntry subPart='col-span-2' value={field.key} className='flex justify-end font-semibold' />
            <GridEntry subPart='col-span-8' value={field.value} className='flex ml-2' />
          </Grid>
        ))}
      </Grid>
      
      {todo?.description &&
        <div className={styles.listItemDesc}>
          <p className='break-words hypens-auto'>
            {todo.description}
          </p>
        </div>
      }
    </motion.div>
  )
}

export default Details