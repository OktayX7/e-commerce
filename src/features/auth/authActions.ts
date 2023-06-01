// Package Imports

// Feature Imports
import {createAsyncThunk} from '@reduxjs/toolkit'
import {setUser, setError} from './authSlice'
import {SignInRequestModel, UserModel} from './models'
import {LoginApi} from './apis'

export const setUserAction = (user: Nullable<UserModel>) => (dispatch: any) => {
  dispatch(setUser(user))
}

export const signInAction = createAsyncThunk(
  'auth/login',
  async (signInRequest: SignInRequestModel, {dispatch}) => {
    const loginResponse = await LoginApi(signInRequest)
    const token = loginResponse.token?.length > 0

    if (token) {
      dispatch(setUserAction(loginResponse))
    } else {
      dispatch(setError('Invalid credentials'))

      setTimeout(() => {
        dispatch(setError(null))
      }, 3000)
    }
  }
)

export const logOutAction = () => (dispatch: any) => {
  dispatch(setUserAction(null))
}

export const errorAction = (error: Nullable<string>) => (dispatch: any) => {
  dispatch(setError(error))
}
