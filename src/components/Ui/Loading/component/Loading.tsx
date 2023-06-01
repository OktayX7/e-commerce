// React Imports
import {FC} from 'react'

interface LoadingProps {
  size?: string
  className?: string
}

export const Loading: FC<LoadingProps> = ({size = '4', className}) => {
  return (
    <div className={`w-${size} h-${size} bg-warning rounded-full animate-pulse ${className}`}></div>
  )
}
