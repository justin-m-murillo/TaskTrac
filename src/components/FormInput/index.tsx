import React, { ReactNode } from 'react'

type FormInputProps = {
  name: string,
  children?: ReactNode,
}

export const FormInput = ({ name, children }: FormInputProps) => {
  return (
    <div className='flex flex-col'>
      <label className={styles.label}>{ name }</label>
      { children }
    </div>
  )
}

export const FormBoolInput = ({ name }: FormInputProps) => {
  return (
    <FormInput name={name}>
      <input type='' name={name} />
    </FormInput>
  )
}

export const FormTextInput = ({ name }: FormInputProps) => {
  return (
    <FormInput name={name}>
      <input type='text' name={name} className={`${styles.singleInput} ${styles.input}`} />
    </FormInput>
  )
}

export const FormAreaInput = ({ name }: FormInputProps) => {
  return (
    <FormInput name={name}>
      <textarea name={name} className={`${styles.areaInput} ${styles.input}`} />
    </FormInput>
  )
}

const styles = {
  label: 'ml-2 mb-2 uppercase font-semibold',
  input: 'border-slate-500 bg-transparent px-2 py-1 mb-4 outline-none focus-within:border-slate-200',
  singleInput: 'border-b',
  areaInput: 'border rounded h-24',
}