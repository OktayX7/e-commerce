/* eslint-disable indent */
import {RootState} from '../../libs'

export const getUserState =
  () =>
  ({auth: {user}}: RootState) =>
    user
export const getErrorState =
  () =>
  ({auth: {error}}: RootState) =>
    error
