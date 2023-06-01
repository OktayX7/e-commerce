// Feature Imports
import {ProductModel} from 'features/product'
import {
  decrementQuantityAction,
  incrementQuantityAction,
  removeProductFromCartAction,
  setShowAction,
} from '../cartActions'
import {getCartState} from '../cartSelector'

// Function Imports
import {slugify} from 'function'

// React Imports
import {FC} from 'react'
import {useState} from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight, faXmark} from '@fortawesome/free-solid-svg-icons'

// UI Imports
import {Button, Link, Loading} from 'components/Ui'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

interface CartItemProps {
  product: ProductModel
}

export const CartItem: FC<CartItemProps> = ({product}) => {
  const dispatch = useAppDispatch()

  const [removeProduct, setremoveProduct] = useState(false)

  const cart = useAppSelector(getCartState())

  const {title, images, price, quantity} = product

  const slug = slugify(title)

  return (
    <li
      className={`flex items-center gap-4 py-4 relative  ${
        removeProduct ? 'opacity-50 cursor-wait' : 'opacity-100'
      } ${cart.length !== cart.indexOf(product) + 1 && 'border-b border-primary-600'}`}>
      <Link
        to={`/product/${slug}`}
        onClick={() => {
          dispatch(setShowAction(false))
        }}>
        <img src={images[0]} alt={title} width={60} />
      </Link>
      <div className='flex-1'>
        <Link
          onClick={() => {
            dispatch(setShowAction(false))
          }}
          to={`/product/${slug}`}>
          <span>{title}</span>
        </Link>
        <Button
          onClick={() => {
            setremoveProduct(true)
            setTimeout(() => dispatch(removeProductFromCartAction(product)), 1000)
          }}
          className='absolute top-3 right-0'>
          <FontAwesomeIcon icon={faXmark} />
        </Button>

        <div className='flex justify-between'>
          <div className='flex text-primary-400'>
            <span>Qty</span>
            <div className='ml-2 flex items-center'>
              <Button onClick={() => dispatch(decrementQuantityAction(product))}>
                <FontAwesomeIcon icon={faCaretLeft} />
              </Button>
              <span className='mx-2'>{quantity}</span>
              <Button onClick={() => dispatch(incrementQuantityAction(product))}>
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </div>
          </div>
          <span>${(price * quantity).toFixed(2)}</span>
        </div>
      </div>
      {removeProduct && <Loading className='absolute top-10 left-40' />}
    </li>
  )
}
