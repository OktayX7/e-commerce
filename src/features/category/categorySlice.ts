// Feateure Imports
import {CategoryModel, CategoryState} from './models'

// Package Imports
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: CategoryState = {
  categories: [],
}

const {reducer, actions} = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategories: (state: CategoryState, {payload}: PayloadAction<CategoryModel[]>) => {
      state.categories = payload
    },
  },
})

export default reducer
export const {setCategories} = actions
