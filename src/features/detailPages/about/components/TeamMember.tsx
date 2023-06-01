// React Imports
import {FC} from 'react'

// Feature Imports
import '../styles/team-member.scss'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, IconDefinition} from '@fortawesome/free-brands-svg-icons'

// UI Imports
import {Link} from 'components/Ui'

export interface TeamMemberProps {
  name: string
  jobTitle: string
  src: string
  socialMedias?: {
    socialMediaUrl: string
    icon?: IconDefinition
  }[]
}

export const TeamMember: FC<TeamMemberProps> = ({name, jobTitle, src, socialMedias}) => {
  const renderSocialMediaLink = ({
    socialMediaUrl,
    icon,
  }: {
    socialMediaUrl: string
    icon?: IconDefinition
  }) => {
    return (
      <li className='mr-4 py-1 text-warning hover:text-white'>
        <Link to={socialMediaUrl}>
          <FontAwesomeIcon icon={icon ?? faFacebookF} />
        </Link>
      </li>
    )
  }

  return (
    <>
      <li className='pr-2 lg:pr-8 pt-3'>
        <div className='align-middle w-57 md:w-52 lg:w-56'>
          <div className='group mb-2 md:mb-4 nm-team-member-overlay'>
            <img src={src} alt='team-member-1' />

            <ul className='group-hover:flex sm:py-2 text-xl nm-team-member-social-icons'>
              {/* This method renders all social medias given by user. */}
              {socialMedias?.map((socialMedia) => {
                return renderSocialMediaLink(socialMedia)
              })}
            </ul>
          </div>

          <div className='text-center'>
            <h2 className='text-lg'>{name}</h2>
            <h3 className='text-primary-600 text-sm'>{jobTitle}</h3>
          </div>
        </div>
      </li>
    </>
  )
}
