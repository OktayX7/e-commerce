// Feature Imports
import {CartState} from './models'
import {ProductModel} from 'features/product'

// Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  shippingPrice: 10,
  show: false,
}

const {reducer, actions} = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload
    },

    addProductToCart: (state, action: PayloadAction<ProductModel>) => {
      const product = state.products.find((product) => product.id === action.payload.id)
      if (product) {
        product.quantity++
      } else {
        state.products.push({...action.payload, quantity: action.payload.quantity})
      }
    },

    removeProductFromCart: (state, action: PayloadAction<ProductModel>) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    },

    decrementQuantity: (state, action: PayloadAction<ProductModel>) => {
      const product = state.products.find((product) => product.id === action.payload.id)
      if (product && product.quantity > 1) {
        product.quantity--
      }
    },

    incrementQuantity: (state, action: PayloadAction<ProductModel>) => {
      const product = state.products.find((product) => product.id === action.payload.id)
      if (product) {
        product.quantity++
      }
    },

    clearCart: (state) => {
      state.products = []
    },

    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },

    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
    },
    setShippingPrice: (state, action: PayloadAction<number>) => {
      state.shippingPrice = action.payload
    },
  },
})

export default reducer
export const {
  setCart,
  addProductToCart,
  removeProductFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
  setTotalPrice,
  setShow,
  setShippingPrice,
} = actions
