// React Imports
import {FC, InputHTMLAttributes} from 'react'

// Package Imports
import classNames from 'classnames'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: string
  type: 'text' | 'email' | 'password' | 'number'
  label?: string
  name: string
  value?: string
  disabled?: boolean
  placeholder?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  className?: string
  wrapperClassName?: string
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
}

export const Input: FC<InputProps> = ({
  error,
  type,
  label,
  name,
  disabled,
  placeholder,
  size,
  value,
  onChange,
  className,
  wrapperClassName,
  inputRef,
}) => {
  const inputClass = classNames(
    'text-primary border border-primary-200 bg-transparent outline-none py-2',
    {
      'w-1/6': size === 'sm',
    },
    {
      'w-2/6': size === 'md',
    },
    {
      'w-3/6': size === 'lg',
    },
    {
      'w-4/6': size === 'xl',
    },
    {
      'w-5/6': size === '2xl',
    },
    {
      'w-full': size === 'full',
    },

    {
      'mt-1': label,
    },

    className
  )

  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={inputRef}
        id={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClass}
      />
      {error && <span className='text-red-500'>{error}</span>}
    </div>
  )
}
