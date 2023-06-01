import {TopMenu, BottomMenu} from '../hamburger-menu-item'
import {FC} from 'react'
import classNames from 'classnames'

// UI Imports
import {SocialMediaIcons} from 'components/SocialMediaIcons/SocialMediaIcons'

interface HamburgerMenuProps {
  isOpenDropdown?: boolean
  closeDropdown?: () => void
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({isOpenDropdown, closeDropdown}) => {
  const menuClass = classNames(
    'absolute shadow-lg w-screen px-4 pb-8 text-primary-700 text-[15px] border-b border-b-slate-200 bg-white translate-y-[-100%] z-[-1] bg-white lg:hidden',
    {
      'transition duration-1000 ease-in-out translate-y-[0]': isOpenDropdown,
    },
    {
      'transition duration-1000 ease-in-out translate-y-[-100%]': !isOpenDropdown,
    }
  )

  return (
    <div className={menuClass}>
      <TopMenu closeDropdown={closeDropdown} />
      <BottomMenu closeDropdown={closeDropdown} />
      <SocialMediaIcons color='light' className='pt-8 z-[-100] text-lg' />
    </div>
  )
}
