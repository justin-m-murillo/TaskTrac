import React from 'react'
import styles from './styles'

type LocationProps = {
  location: string | null
}

const Lcoation = ({ location }: LocationProps) => {
  return (
    <>
      {location && 
        <div className={styles.root}>
          <p><span className={styles.loc}>Loc:</span>{ location }</p>
        </div>
      }
    </>
  )
}

export default Lcoation