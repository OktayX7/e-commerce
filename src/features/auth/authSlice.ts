import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthStateModel, UserModel} from './models'

const initialState: AuthStateModel = {
  user: null,
  error: null,
}

export const {reducer, actions} = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<Nullable<UserModel>>) => {
      state.user = payload
    },
    setError: (state, {payload}: PayloadAction<Nullable<string>>) => {
      state.error = payload
    },
  },
})

export default reducer
export const {setUser, setError} = actions
