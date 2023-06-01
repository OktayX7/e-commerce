// React Imports
import {useParams} from 'react-router-dom'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

// Feature Imports
import {getCartTotalPrice, getCartState, getCartShippingPrice} from 'features/cart'

// Hook Imports
import {useAppSelector} from 'hooks'

//UI Imports
import {Link} from 'components'

// Function Imports
import {slugify} from 'function'

export const OrderReceivedPage = () => {
  const {orderId} = useParams<{orderId: string}>()
  const date = new Date().toLocaleDateString()
  const totalPrice = useAppSelector(getCartTotalPrice())
  const cart = useAppSelector(getCartState())
  const shippingPrice = useAppSelector(getCartShippingPrice())

  return (
    <div className='max-w-[802px] mx-auto px-3'>
      <h2 className='text-green-500 text-lg text-center pt-12'>
        <FontAwesomeIcon icon={faCheck} className='mr-2' />
        Thank you. Your order has been received.
      </h2>

      <div className='my-11 py-5 bg-primary-100'>
        <ul className='px-5 lg:flex lg:justify-around lg:px-14'>
          <li className='text-primary-500 pb-3 mb-2 border-b border-b-primary-200 lg:border-none lg:flex lg:flex-col'>
            Order Number: <span className='text-primary'>{orderId}</span>
          </li>
          <li className='text-primary-500 pb-3 mb-2 border-b border-b-primary-200 lg:border-none lg:flex lg:flex-col'>
            Date: <span className='text-primary'>{date}</span>
          </li>
          <li className='text-primary-500 pb-3 mb-2 border-b border-b-primary-200 lg:border-none lg:flex lg:flex-col'>
            Total: <span className='text-primary'>${totalPrice}</span>
          </li>
          <li className='text-primary-500 pb-3 mb-2 lg:flex lg:flex-col'>
            Payment Method: <span className='text-primary'>Check payments</span>
          </li>
        </ul>
      </div>

      <h2 className='text-2xl pb-4 border-b border-b-primary-200'>Order details</h2>
      <ul>
        {cart.map((product) => (
          <li
            key={`${product.title}_${product.id}`}
            className='flex justify-between py-4 border-b border-b-primary-200'>
            <span>
              <Link
                to={slugify(product.title)}
                className='text-warning hover:text-primary transition-all'>
                {product.title}
              </Link>
              <span> x {product.quantity}</span>
            </span>
            <span>${product.price * product.quantity}.00</span>
          </li>
        ))}

        <ul className='border-b border-b-primary-200 text-primary-700'>
          <li className='flex justify-between pt-5 pb-2'>
            <span>Subtotal:</span> <span>${totalPrice}.00</span>
          </li>
          <li className='flex justify-between items-center py-3'>
            <span>Shipping:</span>
            <span className='flex flex-col items-end'>
              ${shippingPrice}.00 <span className='text-xs'>via Express</span>
            </span>
          </li>
          <li className='flex justify-between py-3'>
            <span>Payment Method</span> <span>Check payments</span>
          </li>
        </ul>
        <li className='flex justify-between py-3 text-lg border-b border-b-primary-200'>
          <span>Total:</span> <span>${totalPrice + shippingPrice}.00</span>
        </li>
      </ul>
    </div>
  )
}
