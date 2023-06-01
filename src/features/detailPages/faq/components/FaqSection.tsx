// React Import
import {FC, PropsWithChildren} from 'react'

// Package Imports
import classNames from 'classnames'

export interface FaqSectionProps extends PropsWithChildren {
  title: string
  border?: boolean
}

export const FaqSection: FC<FaqSectionProps> = ({title, children, border}) => {
  const wrapperClasses = classNames('px-4 py-4 flex flex-col md:flex md:flex-row w-4/4', {
    'border-b border-primary-100': border,
  })

  return (
    <div className={wrapperClasses}>
      <div className='text-primary block'>
        <h4 className='text-2xl pb-4 mt-4 text-warning w-56'>{title}</h4>
      </div>
      <div className='flex flex-col'>{children}</div>
    </div>
  )
}
