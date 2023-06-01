// React Imports
import {FC, PropsWithChildren, RefAttributes} from 'react'

// Package Imports
import {Link as RouterLink} from 'react-router-dom'

interface LinkProps extends RefAttributes<HTMLAnchorElement>, PropsWithChildren {
  to: string
  className?: string
  onClick?: () => void
}

export const Link: FC<LinkProps> = ({to, className, children, onClick}) => {
  return (
    <RouterLink onClick={onClick} to={to} className={className}>
      {children}
    </RouterLink>
  )
}
