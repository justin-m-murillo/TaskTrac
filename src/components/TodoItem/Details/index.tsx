import React, { ReactNode } from 'react'
import styles from './styles'
import { Field } from '@/types/Field'

type DetailsProps = {
  description: string | null,
  fields: Field[]
}

const Details = ({ description, fields }: DetailsProps) => {

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.fieldTable}>
        <div className={styles.fieldKey}>
          {fields.map(field => (
            <p>{field.key}</p>
          ))}
        </div>
        <div className={styles.fieldValue}>
          {fields.map(field => (
            <p>{field.value}</p>
          ))}
        </div>
      </div>
      {description &&
        <p className={styles.listItemDesc}>
          <span className='mr-8'/>{description}
        </p>
      }
    </div>
  )
}

export default Details