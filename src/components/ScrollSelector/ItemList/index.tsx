import React, { useEffect, useRef } from 'react'
import styles from './styles'

type Props = {
  items: string[],
  title: string,
  onClick: (value: number) => void,
  currentValue: number | null | undefined
}

const ItemList = ({ items, title, onClick, currentValue }: Props) => {
  const selectedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    selectedRef.current?.scrollIntoView()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.title}></div>
      <div className={`${styles.itemContainer}`}>
        {items.map((item, index) => 
          {
            return (
              <div
                ref={currentValue === index ? selectedRef : null}
                key={item}
                className={`${styles.item} ${currentValue === index ? styles.isActive : styles.notActive}`}
                onClick={() => onClick(index)}
              >
                {item}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default ItemList

