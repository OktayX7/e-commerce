// React Imports
import {useState, MouseEvent} from 'react'
import {useLocation} from 'react-router-dom'

// Package Imports
import {useMediaQuery} from 'react-responsive'

// Feature Imports
import {HamburgerMenu} from './hamburger-menu'
import {HeaderRight} from './HeaderRight'
import {HeaderLogo} from './HeaderLogo'
import {HamburgerMenuButton} from './hamburger-menu/components/HamburgerMenuButton'
import {CategoryList} from './category/components'
import {categories} from './category'
import {Pages} from './pages/components'

// Style Imports
import './style/main.scss'

export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenCategories, setIsOpenCategories] = useState(false)
  const [isOpenPages, setIsOpenPages] = useState(false)
  const isSmallScreen = useMediaQuery({maxWidth: 1024})

  const location = useLocation()
  const home = location.pathname === '/'

  const openDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  const closeDropdown = () => {
    setIsOpenDropdown(false)
  }

  const handleCloseCategoryMouseOver = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const element = event.nativeEvent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(element.relatedTarget as any)?.classList?.contains('menu-desktop')) {
      setIsOpenCategories(false)
      setIsOpenPages(false)
    }
  }

  return (
    <>
      <div className='h-19'></div>
      <header
        className={`fixed top-0 w-full bg-white z-10 text-primary-600 ${
          !home && 'border-b border-b-primary-100'
        }`}
        onMouseLeave={handleCloseCategoryMouseOver}>
        <div
          className='flex items-center justify-between px-4 h-19 md:max-w-7xl lg:mx-auto bg-white'
          onMouseLeave={handleCloseCategoryMouseOver}>
          {isSmallScreen && (
            <HamburgerMenuButton isOpenDropdown={isOpenDropdown} openDropdown={openDropdown} />
          )}
          {!isSmallScreen && (
            <div className='menu-desktop h-full'>
              <ul className='hidden lg:flex h-full '>
                <li
                  onMouseOver={() => {
                    setIsOpenCategories(true)
                    setIsOpenPages(false)
                  }}
                  className='relative flex justify-between items-center  cursor-pointer hover:text-primary mx-16'>
                  <p className='relative py-[2px]'>
                    Categories <span className='text-[10px] absolute left-19 top-0'>NEW</span>
                  </p>
                </li>
                <li
                  className='flex justify-between items-center  cursor-pointer hover:text-primary'
                  onMouseOver={() => {
                    setIsOpenPages(true)
                    setIsOpenCategories(false)
                  }}>
                  {isOpenPages && (
                    <div
                      onMouseLeave={() => {
                        setIsOpenPages(false)
                      }}
                      className='menu-desktop -ml-12 w-1.75/12 bg-primary-800 text-primary-300 text-sm rounded-md absolute top-12.5  z-10 opacity-0-1 opacity-translateX-ease-in-out-05sn'>
                      <Pages />
                    </div>
                  )}

                  <p>Pages</p>
                </li>
              </ul>
            </div>
          )}

          <HeaderLogo />
          <HeaderRight />
        </div>

        <HamburgerMenu isOpenDropdown={isOpenDropdown} closeDropdown={closeDropdown} />

        {isOpenCategories && (
          <div className='menu-desktop hidden lg:block lg:max-w-6xl lg:mx-auto opacity-translateX-ease-in-out-1sn'>
            <CategoryList categories={categories} />
          </div>
        )}
      </header>
    </>
  )
}
