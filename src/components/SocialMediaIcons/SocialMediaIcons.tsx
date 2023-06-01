// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

// React Imports
import {FC} from 'react'

// UI Imports
import {Link} from 'components/Ui'

interface SocialMediaIconsProps {
  color?: 'white' | 'black' | 'light'
  className?: string
}

export const SocialMediaIcons: FC<SocialMediaIconsProps> = ({color, className}) => {
  const icons = [
    {icon: faFacebookF, link: 'https://www.facebook.com'},
    {icon: faInstagram, link: 'https://www.instagram.com'},
    {icon: faTwitter, link: 'https://www.twitter.com'},
  ]

  const iconColor = classNames({
    'text-primary-100 hover:text-primary-300': color === 'white',
    'text-primary hover:text-primary-700': color === 'black',
    'text-primary-500 hover:text-primary': color === 'light',
  })

  const socialMediaClass = classNames('flex items-center gap-3', className)

  return (
    <ul className={socialMediaClass}>
      {icons.map(({icon, link}, index) => (
        <li key={`${icon}_${index}`} className={iconColor}>
          <Link to={link}>
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
