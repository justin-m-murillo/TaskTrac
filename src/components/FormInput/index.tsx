import React, { ReactNode, useState } from 'react'

interface FormInputProps {
  name: string
  maxLength: number
}

interface FormInputBaseProps extends FormInputProps {
  charCount: number
  children: ReactNode
}

export const FormInput = ({ name, charCount, maxLength, children }: FormInputBaseProps) => {
  return (
    <div className='flex flex-col'>
      <label className={styles.label}>
        { name } 
        {charCount > maxLength*.75 && 
          <span className='ml-4 font-normal'>
            {charCount}/{maxLength}
          </span>
        }
      </label>
      { children }
    </div>
  )
}

export const FormTextInput = ({ name, maxLength }: FormInputProps) => {
  const [ charCount, setCharCount ] = useState<number>(0)
  

  return (
    <FormInput name={name} charCount={charCount} maxLength={maxLength}>
      <input 
        type='text' 
        name={name}
        className={`${styles.singleInput} ${styles.input}`}
        maxLength={maxLength} 
        onChange={e => setCharCount(e.target.value.length)}
      />
    </FormInput>
  )
}

export const FormAreaInput = ({ name, maxLength }: FormInputProps) => {
  const [ charCount, setCharCount ] = useState<number>(0)

  return (
    <FormInput name={name} charCount={charCount} maxLength={maxLength}>
      <textarea 
        name={name} 
        className={`${styles.areaInput} ${styles.input}`} 
        maxLength={maxLength}
        onChange={e => setCharCount(e.target.value.length)}
      />
    </FormInput>
  )
}

const styles = {
  label: 'ml-2 mb-2 uppercase font-semibold',
  input: 'border-slate-500 bg-transparent px-2 py-1 mb-4 outline-none focus-within:border-slate-200',
  singleInput: 'border-b',
  areaInput: 'border rounded h-24',
}