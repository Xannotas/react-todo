import React from 'react'
import classNames from 'classnames'

type Props = {
  value: string,
  className?: string,
  placeholder?: string,
  maxLenght?: number

  setValue: (newValue: string) => void,
  onSubmit: () => void
}
const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({ onBlur, value, className, placeholder = '...', onSubmit, setValue, maxLenght = 50 }) => {

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    if (newValue.length <= maxLenght) {
      setValue(newValue)
    }
  }

  const handleEnterDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <input autoFocus placeholder={placeholder}
      className={classNames('input', className)}
      value={value} onChange={onChangeValue}
      onBlur={onBlur}
      onKeyDown={handleEnterDown}
    />
  )
}
export default Input