// React Import
import {FC, PropsWithChildren} from 'react'

export interface FaqSectionItemProps extends PropsWithChildren {
  question: string
}

export const FaqSectionItem: FC<FaqSectionItemProps> = ({question, children}) => {
  return (
    <div className='text-primary-600 md:flex md:flex-col lg:flex lg:flex-row mt-6'>
      <h4 className='md:w-full md:pb-4 lg:w-2/4 lg:pl-20 text-primary-900'>{question}</h4>
      {children}
    </div>
  )
}
