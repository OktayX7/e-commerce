// Feature Imports
import {GetCategoriesApi} from './apis'
import {setCategories} from './categorySlice'

// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

export const getCategoriesAction = createAsyncThunk('categories', async (any, {dispatch}) => {
  const categoriesResponse = await GetCategoriesApi()

  if (categoriesResponse) {
    dispatch(setCategories(categoriesResponse))
  }
})
