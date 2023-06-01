// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

// Feature Imports
import {GetBlogsApi, GetBlogByTitleApi} from './apis'
import {setBlogs, setBlog} from './blogSlice'

export const getBlogsAction = createAsyncThunk('blogs', async (any, {dispatch}) => {
  const blogsResponse = await GetBlogsApi()

  if (blogsResponse) {
    dispatch(setBlogs(blogsResponse))
  }
})

export const getBlogByTitleAction = createAsyncThunk('blog', async (title: string, {dispatch}) => {
  console.warn('getBlogByTitleAction triggered')
  const blogResponse = await GetBlogByTitleApi(title)

  if (blogResponse) {
    dispatch(setBlog(blogResponse))
  }
})
