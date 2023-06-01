// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

// Feature Imports
import {setLoading} from './loadingSlice'

export const setLoadingAction = createAsyncThunk(
  'loading',
  async (loading: boolean, {dispatch}) => {
    dispatch(setLoading(loading))
  }
)
