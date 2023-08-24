import React from 'react'
import styles from '../styles'
import { Field } from '@/types/Field'

type Props = {
  fields: Field[]
}

const FieldTable = ({ fields }: Props) => {
  return (
    <div className={styles.fieldTable}>
      <div className={styles.fieldKey}>
        {fields.map(field => (
          <p key={field.key}>{field.key}:</p>
        ))}
      </div>
      <div className={styles.fieldValue}>
        {fields.map(field => (
          <p key={field.value}>{field.value}</p>
        ))}
      </div>
    </div>
  )
}

export default FieldTable