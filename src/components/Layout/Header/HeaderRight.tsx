// React Imports
import {useEffect, useState} from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {useTranslation} from 'react-i18next'

// UI imports
import {Button, Link} from 'components/Ui'

// Feature Imports
import {LoginPage} from 'features/auth/components'
import {setShowAction} from 'features/cart/cartActions'
import {getCartProductsCount} from 'features/cart'
import {getUserState} from 'features/auth/authSelector'
import {logOutAction} from 'features/auth/authActions'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

export const HeaderRight = () => {
  const user = useAppSelector(getUserState())
  const [isOpen, setIsOpen] = useState(false)

  const toggleModalOpen = () => setIsOpen(!isOpen)

  const dispatch = useAppDispatch()

  const cartCount = useAppSelector(getCartProductsCount())

  useEffect(() => {
    if (user) setIsOpen(false)
  }, [user])

  const {t, i18n} = useTranslation()

  return (
    <>
      <div className='relative p-2'>
        <Link to='/wishlist' className='hidden lg:inline text-primary-600 hover:text-primary'>
          <FontAwesomeIcon icon={faHeart} className="className='py-4 px-3" />
        </Link>

        {!user && (
          <div
            onClick={toggleModalOpen}
            className='hidden lg:inline text-primary-600 hover:text-primary cursor-pointer'>
            <span className='py-4 px-3'>Sign In</span>
          </div>
        )}

        <span
          onClick={() => dispatch(setShowAction(true))}
          className='text-primary-600 hover:text-primary cursor-pointer relative py-2 pr-2'>
          <span className='py-4 px-3'>Cart</span>
          <span className='absolute top-0 right-2  text-warning'>{cartCount}</span>
        </span>

        {user && (
          <div
            onClick={() => dispatch(logOutAction())}
            className='hidden lg:inline text-primary-600 hover:text-primary cursor-pointer'>
            <span className='py-4 px-3'>{t('LogOut')}</span>
          </div>
        )}

        <Button onClick={() => i18n.changeLanguage('tr-TR')}>TR</Button>
        <Button onClick={() => i18n.changeLanguage('en-US')}>EN</Button>
      </div>

      {isOpen && <LoginPage isOpen={isOpen} onClose={toggleModalOpen} />}
    </>
  )
}
