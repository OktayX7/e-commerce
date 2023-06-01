// React Imports
import {FC} from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

// Feature Imports
import {setShowAction, addProductToCartAction} from 'features/cart/cartActions'
import {removeFavoriteAction} from '../wishlistAction'

// Model Imports
import {Button} from 'components'

// UI Imports
import {Link} from 'components'
import {ProductModel} from 'features/product'

// Hook Imports
import {useAppDispatch} from 'hooks'

interface WishlistItemProps {
  product: ProductModel
}

export const WishlistItem: FC<WishlistItemProps> = ({product}) => {
  const {id, title, images, discountPercentage, price, stock} = product

  const dispatch = useAppDispatch()

  return (
    <div className='flex items-center justify-between p-5 pl-0 border-b border-b-primary-100 relative'>
      <div className='flex items-center w-1/2'>
        <Link to='/'>
          <img src={images[0]} width={80} alt={title} />
        </Link>
        <Link to='/' className='ml-4 text-primary-400 hover:text-primary'>
          {title}
        </Link>
      </div>
      <div className='flex flex-auto items-center justify-between'>
        {discountPercentage && discountPercentage > 0 && (
          <span>
            <span className='text-primary-500 line-through'>${price}</span>
            <span className='text-warning ml-2'>${price - (price * discountPercentage) / 100}</span>
          </span>
        )}
        {stock > 0 && <span className='text-green-500'>In Stock</span>}
        {stock === 0 && <span className='text-red-500'>Out of Stock</span>}
        <Button
          onClick={() => {
            dispatch(addProductToCartAction(product))
            dispatch(setShowAction(true))
          }}
          color='primary'
          disabled={stock < 1 ? true : false}
          size='sm'
          className={`px-3 py-1 rounded-lg ${
            stock === 0 ? 'bg-primary-500 cursor-not-allowed' : ''
          }`}>
          Add to Cart
        </Button>
        <FontAwesomeIcon
          onClick={() => dispatch(removeFavoriteAction(id))}
          icon={faXmark}
          className='cursor-pointer absolute top-3 right-3 text-primary-500 hover:text-primary'
        />
      </div>
    </div>
  )
}
