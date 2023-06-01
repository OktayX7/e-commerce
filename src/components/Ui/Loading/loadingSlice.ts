// Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const {reducer, actions} = createSlice({
  // Bu adin temelde hic bir hukmu yok, store icine kayit edilirken verilen ad gecerli oluyor
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload
    },
  },
})

export default reducer
export const {setLoading} = actions
