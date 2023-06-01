// React Imports
import {ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren} from 'react'

// Package Imports
import classNames from 'classnames'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'>,
    PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement> | any
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg' | 'full'
  color?: 'primary' | 'transparent'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  size,
  color,
  rounded,
  className,
  disabled,
}) => {
  const buttonClass = classNames(
    {
      'bg-primary text-white hover:opacity-80': color === 'primary',
      'bg-transparent border text-primary border-primary-300 hover:border-primary':
        color === 'transparent',
      'w-1/4': size === 'sm',
      'w-2/4': size === 'md',
      'w-3/4': size === 'lg',
      'w-full': size === 'full',
      'rounded-sm': rounded === 'sm',
      'rounded-md': rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'rounded-full': rounded === 'full',
    },
    {
      'cursor-not-allowed': disabled,
    },
    className
  )

  return (
    <button disabled={disabled} onClick={onClick} type={type} className={buttonClass}>
      {children}
    </button>
  )
}
