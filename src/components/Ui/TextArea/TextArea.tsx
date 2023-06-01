// React Imports
import {FC, TextareaHTMLAttributes} from 'react'

// Package Imports
import classNames from 'classnames'

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  name: string
  value?: string
  disabled?: boolean
  placeholder?: string
  rows?: number
  cols?: number
  className?: string
  borderColor?: 'slate' | 'red' | 'blue' | 'gray' | 'purple' | 'primary'
}

export const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  disabled,
  placeholder,
  rows,
  cols,
  value,
  onChange,
  className,
  borderColor = 'primary',
}) => {
  const textareaClass = classNames(
    'resize focus:outline-none  rounded-md',
    {
      'bg-gray-100': disabled,
    },
    {
      [`border border-${borderColor}-300 focus:border-${borderColor}-500`]: borderColor,
    },

    className
  )

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={onChange}
        id='message'
        disabled={disabled}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        placeholder={placeholder}
        className={textareaClass}
      />
    </div>
  )
}
