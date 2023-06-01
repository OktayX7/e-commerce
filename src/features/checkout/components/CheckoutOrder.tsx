// React Imports
import {FC} from 'react'

// UI Imports
import {Button} from 'components'

// Feature Imports
import {getCartState, getCartTotalPrice, getCartShippingPrice} from 'features/cart'
import {setShippingPriceAction} from 'features/cart/cartActions'

// Hook Imports
import {useAppSelector, useAppDispatch} from 'hooks'

interface CheckoutOrderProps {
  handleSubmit: VoidFunction
}

export const CheckoutOrder: FC<CheckoutOrderProps> = ({handleSubmit}) => {
  const dispatch = useAppDispatch()

  const cart = useAppSelector(getCartState())
  const totalPrice = useAppSelector(getCartTotalPrice())
  const shippingPrice = useAppSelector(getCartShippingPrice())

  return (
    <div className='w-5/12'>
      <h2 className='pb-7 text-2xl'>Your order</h2>
      <div className='flex flex-col gap-2 mt-7'>
        {cart.map((product, index) => {
          const {images, title, price, quantity} = product

          return (
            <div
              key={`${index}_product`}
              className={`flex justify-between pb-3 ${
                cart.length > 1 && index < cart.length - 1 && 'border-b'
              }`}>
              <div className='flex'>
                <img className='w-14 h-16' src={images[0]} alt={title} />
                <p className='ml-4'>
                  {title}
                  <span className='ml-3 bg-primary px-2  text-white text-sm rounded-3xl'>
                    x {quantity}
                  </span>
                </p>
              </div>
              <p>${price}</p>
            </div>
          )
        })}
      </div>

      <div className='mt-10 bg-primary-100 text-sm border border-primary-200'>
        <div className='flex justify-between border-b px-5 py-4'>
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <div className='px-5 py-4 border-b'>
          <p className='pb-3'>Shipping</p>
          <div>
            <label htmlFor='standart' className='flex justify-between items-center'>
              <div>
                <input
                  type='radio'
                  name='shipping'
                  id='standart'
                  value='10'
                  onChange={(e) => dispatch(setShippingPriceAction(Number(e.target.value)))}
                />
                <span className='ml-2'>Standart:</span>
              </div>
              <span>$10</span>
            </label>

            <label htmlFor='express' className='flex justify-between items-center'>
              <div>
                <input
                  type='radio'
                  name='shipping'
                  id='express'
                  value='19'
                  onChange={(e) => dispatch(setShippingPriceAction(Number(e.target.value)))}
                />
                <span className='ml-2'>Express:</span>
              </div>
              <span>$19</span>
            </label>
          </div>
        </div>
        <div className='flex justify-between px-5 py-4 text-lg'>
          <p>Total</p>
          <p>${totalPrice + shippingPrice}</p>
        </div>
      </div>

      <Button
        color='primary'
        className='w-full mt-10 py-3'
        onClick={() => {
          handleSubmit()
        }}>
        Place order
      </Button>
    </div>
  )
}
