// Feature Imports
import {ProductModel, ProductState} from './models'

// Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: ProductState = {
  products: [],
  product: {} as ProductModel,
  queryFilter: '',
}

const {reducer, actions} = createSlice({
  // Bu adin temelde hic bir hukmu yok, store icine kayit edilirken verilen ad gecerli oluyor
  name: 'product',
  initialState: initialState,
  reducers: {
    setProducts: (state: ProductState, {payload}: PayloadAction<ProductModel[]>) => {
      state.products = payload
    },
    setProduct: (state: ProductState, {payload}: PayloadAction<ProductModel>) => {
      const like = state.products.find((product) => product.id === payload.id)?.like

      state.product = {...payload, like: like || false}
    },
    setQueryFilter: (state: ProductState, {payload}: PayloadAction<string>) => {
      state.queryFilter = payload
    },
    setIncrement: (state: ProductState, {payload}: PayloadAction<number>) => {
      state.products.find((product) => product.id === payload && (product.quantity += 1))
      state.product.id === payload && (state.product.quantity += 1)
    },

    setDecrement: (state: ProductState, {payload}: PayloadAction<number>) => {
      state.products.find((product) => product.id === payload && (product.quantity -= 1))
      state.product.id === payload && (state.product.quantity -= 1)
    },
  },
})

export default reducer
export const {setProducts, setProduct, setQueryFilter, setIncrement, setDecrement} = actions
