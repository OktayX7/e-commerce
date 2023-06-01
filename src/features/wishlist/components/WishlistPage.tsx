// Feature Imports
import {SocialMediaIcons} from 'components/SocialMediaIcons/SocialMediaIcons'
import {Wishlist} from './Wishlist'
import {getWishlistState} from '../wishlistSelector'

// React Imports
import {useNavigate} from 'react-router-dom'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'

// UI Imports
import {Button} from 'components'

// Hook Imports
import {useAppSelector} from 'hooks'

export const WishlistPage = () => {
  const wishlist = useAppSelector(getWishlistState())

  const navigate = useNavigate()

  return (
    <>
      {wishlist && wishlist.length > 0 && (
        <div className='max-w-7xl mx-auto px-4 pt-14 pb-16'>
          <h1 className='text-2xl border-b pb-6 border-b-primary-100'>Wishlist</h1>

          <Wishlist wishlist={wishlist} />
          <div className='flex items-center pt-8'>
            <span className='text-primary-500 text-sm'>Share</span>
            <SocialMediaIcons color='light' className='ml-4' />
          </div>
        </div>
      )}
      {wishlist.length === 0 && (
        <div className='flex flex-col items-center gap-6 justify-center border-t pt-20 border-t-primary-200'>
          <span className='py-2 px-4 bg-primary-100 rounded-full'>
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </span>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-2xl'>The wishlist is currently empty.</h1>
            <p className='text-primary-400'>
              Click the <FontAwesomeIcon icon={faHeart} /> icons to add products
            </p>
          </div>
          <Button onClick={() => navigate('/')} color='primary' className='py-2 px-4'>
            Return to shop
          </Button>
        </div>
      )}
    </>
  )
}
