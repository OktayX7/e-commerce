// React Imports
import {FC, SelectHTMLAttributes} from 'react'

// Package Imports
import classNames from 'classnames'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name?: string
  id?: string
  datas: {
    displayName: string
    value: string | number
  }[]
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<SelectProps> = ({datas, id, name, className, label, onChange}) => {
  const selectClass = classNames(
    'text-primary border border-primary-200 bg-transparent outline-none py-2 mt-1'
  )
  const wrapperClass = classNames(
    'flex flex-col',
    {
      'mt-1': label,
    },
    className
  )

  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={id}>{label}</label>}
      <select onChange={onChange} className={selectClass} id={id} name={name}>
        {datas?.map((data, index) => {
          return (
            <option key={`${data.displayName}_${index}`} value={data.value}>
              {data.displayName}
            </option>
          )
        })}
      </select>
    </div>
  )
}
