// React Imports
import {FC} from 'react'
import {useLocation} from 'react-router-dom'

// UI Imports
import {Link} from 'components/Ui'
import {SocialMediaIcons} from 'components/SocialMediaIcons/SocialMediaIcons'

// Array Imports
import {pagesArr} from '../Header/pages'

export const Footer: FC = () => {
  const location = useLocation()

  const wishlist = location.pathname === '/wishlist'

  return (
    <>
      <div className='pt-19'></div>
      <footer className={`z-10 bottom-0 w-full ${wishlist ? 'fixed' : 'relative'}`}>
        <div className='text-primary-300 bg-primary-900 py-7 md:py-5'>
          <div className='mx-4 items-center md:flex md:items-center md:justify-between md:px-5 md:max-w-7xl md:mx-auto'>
            <ul className='divide-y md:divide-y-0 md:flex md:flex-wrap items-center text-sm'>
              {pagesArr.map((link, index) => (
                <li key={index} className='py-2 md:pr-7'>
                  <Link className='text-primary-300 hover:text-primary-100' to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <SocialMediaIcons color='white' />
          </div>
        </div>
      </footer>
    </>
  )
}
