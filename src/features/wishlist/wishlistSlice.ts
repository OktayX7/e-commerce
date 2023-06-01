// Feature Imports
import {ProductModel} from 'features/product'
import {WishlistState} from './models'

// Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: WishlistState = {
  wishlist: [],
}

const {reducer, actions} = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    addFavorite: (state: WishlistState, {payload}: PayloadAction<ProductModel>) => {
      const stateContainsProduct = state.wishlist.some(({id}) => id === payload.id)
      if (stateContainsProduct) {
        const index = state.wishlist.findIndex(({id}) => id === payload.id)
        state.wishlist.splice(index, 1)
      } else {
        state.wishlist.push(payload)
      }
    },
    removeFavorite: (state: WishlistState, {payload}: PayloadAction<number>) => {
      const index = state.wishlist.findIndex(({id}) => id === payload)
      state.wishlist.splice(index, 1)
    },
  },
})

export default reducer
export const {addFavorite, removeFavorite} = actions
