//React imports
import {FC, PropsWithChildren} from 'react'

//Fontawesome Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

export interface ContactSectionProps extends PropsWithChildren {
  title: string
  icon: IconProp
  contactInfoElements: string[]
  contactCommunicationInfo?: string
}
export const ContactSection: FC<ContactSectionProps> = ({
  title,
  icon,
  contactInfoElements,
  contactCommunicationInfo,
}) => {
  return (
    <div className='flex flex-row mx-16 pb-7 md:pb-0'>
      <div className='pr-4 '>
        <FontAwesomeIcon icon={icon} size='xl' />
      </div>
      <div>
        <h2 className='text-primary mb-2 text-xl'>{title}</h2>
        <div>
          {contactInfoElements.map((element) => {
            return (
              <p key={`contact_element_${element}`} className='text-primary-600 text-base'>
                {element}
              </p>
            )
          })}

          {contactCommunicationInfo && (
            <p className='pt-2 cursor-pointer text-warning hover:text-primary text-base hover:cursor-pointer'>
              {contactCommunicationInfo}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
