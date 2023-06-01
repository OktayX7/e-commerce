import {createAsyncThunk} from '@reduxjs/toolkit'
import {ProductModel} from 'features/product'
import {addFavorite, removeFavorite} from './wishlistSlice'

export const addFavoriteAction = createAsyncThunk(
  'addFavorite',
  async (product: ProductModel, {dispatch}) => {
    dispatch(addFavorite(product))
  }
)

export const removeFavoriteAction = createAsyncThunk(
  'removeFavorite',
  async (id: number, {dispatch}) => {
    dispatch(removeFavorite(id))
  }
)
