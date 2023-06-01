//React Import
import {FC, PropsWithChildren} from 'react'

export interface AboutSectionProps extends PropsWithChildren {
  title: string
}

export const AboutSection: FC<AboutSectionProps> = ({title, children}) => {
  return (
    <div className='px-2 py-4 md:px-20 flex flex-col md:flex md:flex-row lg:px-24'>
      <div className='text-primary block md:pr-16 lg:pr-32'>
        <h4 className='text-xl w-28 pb-4'>{title}</h4>
      </div>
      {children}
    </div>
  )
}
