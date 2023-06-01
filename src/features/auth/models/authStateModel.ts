import {UserModel} from './userModel'

export interface AuthStateModel {
  user: Nullable<UserModel>
  error: Nullable<string>
}
