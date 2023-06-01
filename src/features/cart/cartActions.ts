import {createAsyncThunk} from '@reduxjs/toolkit'
import {
  setCart,
  addProductToCart,
  removeProductFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
  setTotalPrice,
  setShow,
  setShippingPrice,
} from './cartSlice'
import {ProductModel} from 'features/product'

export const setCartAction = createAsyncThunk(
  'cart/setCart',
  (products: ProductModel[], {dispatch}) => {
    dispatch(setCart(products))
  }
)

export const addProductToCartAction = createAsyncThunk(
  'cart/add',
  (product: ProductModel, {dispatch}) => {
    dispatch(addProductToCart(product))
  }
)

export const removeProductFromCartAction = createAsyncThunk(
  'cart/remove',
  (product: ProductModel, {dispatch}) => {
    dispatch(removeProductFromCart(product))
  }
)

export const decrementQuantityAction = createAsyncThunk(
  'cart/decrement',
  (product: ProductModel, {dispatch}) => {
    dispatch(decrementQuantity(product))
  }
)
export const incrementQuantityAction = createAsyncThunk(
  'cart/increment',
  (product: ProductModel, {dispatch}) => {
    dispatch(incrementQuantity(product))
  }
)

export const clearCartAction = createAsyncThunk('cart/clear', (_, {dispatch}) => {
  dispatch(clearCart())
})

export const setShowAction = createAsyncThunk('cart/setShow', (show: boolean, {dispatch}) => {
  dispatch(setShow(show))
})

export const setTotalPriceAction = createAsyncThunk(
  'cart/setTotalPrice',
  (totalPrice: number, {dispatch}) => {
    dispatch(setTotalPrice(totalPrice))
  }
)

export const setShippingPriceAction = createAsyncThunk(
  'cart/setShippingPrice',
  (shippingPrice: number, {dispatch}) => {
    dispatch(setShippingPrice(shippingPrice))
  }
)
