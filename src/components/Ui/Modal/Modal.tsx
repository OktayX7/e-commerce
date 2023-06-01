// React Imports
import {FC} from 'react'

// Package Imports
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

//style Imports
import './style/main.scss'

interface ModalProps {
  children: React.ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
  modalClassName?: string
  modalBodyClassName?: string
  animation?: boolean
}

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  modalClassName,
  modalBodyClassName,
  children,
  animation,
}) => {
  const overlayClass = classNames('fixed', 'inset-0', 'z-50', 'bg-primary', 'opacity-50')

  const modalClass = classNames(
    modalClassName,
    {
      hidden: !isOpen,
    },
    {
      'opacity-animation': animation,
    }
  )

  return (
    <>
      {/* Overlay */}
      <div className={overlayClass} onClick={onClose} />

      {/* Modal */}
      <div className={modalClass}>
        {/* Header */}
        <div className='p-4 bg-gray-100 rounded-t-lg'>
          <h3 className='text-2xl text-center text-gray-900'>{title}</h3>
          <FontAwesomeIcon
            icon={faXmark}
            className='absolute top-2 right-2 cursor-pointer'
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className={modalBodyClassName}>{children}</div>
      </div>
    </>
  )
}
