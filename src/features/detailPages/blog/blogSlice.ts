// Feature Imports
import {BlogModel, BlogState} from './models'

// Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: BlogState = {
  blogs: [],
  blog: {} as BlogModel,
}

const {reducer, actions} = createSlice({
  // Bu adin temelde hic bir hukmu yok, store icine kayit edilirken verilen ad gecerli oluyor
  name: 'blog',
  initialState: initialState,
  reducers: {
    setBlogs: (state: BlogState, {payload}: PayloadAction<BlogModel[]>) => {
      state.blogs = payload
    },

    setBlog: (state: BlogState, {payload}: PayloadAction<BlogModel>) => {
      state.blog = payload
    },
  },
})

export default reducer
export const {setBlogs, setBlog} = actions
