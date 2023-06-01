// React Imports
import {FC} from 'react'

// Package Imports
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

interface CheckboxProps {
  name?: string
  label: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({label, className, onChange, checked, name}) => {
  const checkboxClass = classNames('relative w-4 h-4 border border-gray-400 rounded-sm')

  return (
    <label className={classNames('flex items-center', className)}>
      <div className={checkboxClass}>
        <input
          name={name}
          type='checkbox'
          className='sr-only'
          checked={checked}
          onChange={onChange}
        />
        {checked && (
          <FontAwesomeIcon
            icon={faCheck}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xs'
          />
        )}
      </div>
      <span className='ml-2 text-gray-700'>{label}</span>
    </label>
  )
}
