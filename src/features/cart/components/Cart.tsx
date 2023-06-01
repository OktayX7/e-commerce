// Package Imports
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

// React Imports
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

// Feature Imports
import {setShowAction} from '../cartActions'
import {getCartShow, getCartState, getCartTotalPrice} from '../cartSelector'
import {setTotalPriceAction} from '../cartActions'
import {CartItem} from './CartItem'

//UI Imports
import {Button} from 'components/Ui'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

// Style Imports
import '../style/cart.scss'

export const Cart = () => {
  const dispatch = useAppDispatch()
  const cartShow = useAppSelector(getCartShow())
  const cart = useAppSelector(getCartState())
  const totalPrice = useAppSelector(getCartTotalPrice())

  const navigate = useNavigate()

  const overlayClasses = classNames(
    'transition-all duration-300',
    {
      'opacity-0 pointer-events-none': !cartShow,
    },
    {
      'opacity-80 fixed inset-0 z-10 bg-white': cartShow,
    }
  )
  const cartClasses = classNames(
    'fixed  right-0 z-20 top-0 h-screen w-[23.75rem] bg-primary-800 text-primary-100 transition-all duration-300 transform',
    {
      'translate-x-full': !cartShow,
      'translate-x-0': cartShow,
    }
  )

  useEffect(() => {
    dispatch(
      setTotalPriceAction(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
    )
  }, [cart])

  return (
    <>
      <div
        onClick={() => {
          dispatch(setShowAction(false))
          document.body.style.overflow = 'auto'
        }}
        className={overlayClasses}></div>

      <div className={cartClasses}>
        <div className='px-10 h-full'>
          <div className='flex justify-end sticky top-0 bg-primary-800 z-10 border-b border-b-primary-600'>
            <Button
              onClick={() => {
                dispatch(setShowAction(false))
                document.body.style.overflow = 'auto'
              }}
              className='py-7'>
              Close
            </Button>
          </div>

          <div className='h-[62%] cart-container overflow-y-scroll'>
            <ul className='py-2'>
              {cart.length > 0 &&
                cart?.map((product) => <CartItem key={product.id} product={product} />)}
            </ul>

            {cart.length === 0 && (
              <div className='flex flex-col items-center justify-center pt-20'>
                <span className='py-2 px-4 bg-primary-700 rounded-full'>
                  <FontAwesomeIcon icon={faXmark} size='2x' />
                </span>
                <p className='mt-3'>No products in the cart.</p>
              </div>
            )}
          </div>
          <div className='sticky bottom-0 bg-primary-800 py-5'>
            {cart.length > 0 && (
              <div className='flex justify-between border-t border-b border-primary-600 py-5 mb-9'>
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            )}
            <Button
              onClick={() => {
                dispatch(setShowAction(false))
                navigate('/')
                document.body.style.overflow = 'auto'
              }}
              color='transparent'
              className='w-full p-4 text-primary-100 border-primary-600 hover:border-primary-600'>
              Continue shopping
            </Button>

            {cart.length > 0 && (
              <Button
                onClick={() => {
                  dispatch(setShowAction(false))
                  navigate('/checkout')
                  document.body.style.overflow = 'auto'
                }}
                color='primary'
                className='w-full mt-3 p-4'>
                Checkout
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
