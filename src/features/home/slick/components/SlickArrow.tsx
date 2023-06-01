// React Imports
import {FC, MouseEventHandler} from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

interface ArrowProps {
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
  isNext?: boolean
}

export const ArrowComponent: FC<ArrowProps> = ({className, onClick, isNext}) => {
  return (
    <div
      className={`${className} hover:text-warning text-primary-400 p-6 absolute top-1/3 md:top-1/2 `}
      onClick={onClick}>
      <FontAwesomeIcon icon={isNext ? faChevronRight : faChevronLeft} className='text-4xl' />
    </div>
  )
}
