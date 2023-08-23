import React from 'react'
import styles from './styles'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

type DetailsBtnProps = {
  showDetails: boolean,
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}

const DetailsBtn = ({ showDetails, setShowDetails }: DetailsBtnProps) => {
  const showMoreBtnSize = 36
  
  return (
    <div className={styles.showMoreButtonWrapper}>
      <button 
        className={styles.showMoreButton}
        onClick={() => setShowDetails(!showDetails)}
      >
        {!showDetails 
          ? <MdArrowDropDown size={showMoreBtnSize} /> 
          : <MdArrowDropUp size={showMoreBtnSize} />
        }
      </button>
    </div>
  )
}

export default DetailsBtn