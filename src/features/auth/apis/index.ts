// Util and Lib Imports
import {requests} from 'utils'

// Feature Imports
import {SignInRequestModel, UserModel} from '../models'

const authBaseUrl = '/auth'

export const LoginApi = (user: SignInRequestModel) =>
  requests.post<UserModel>(`${authBaseUrl}/login`, user)
