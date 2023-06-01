import {useDispatch} from 'react-redux'
import {AppDispatch} from '../libs'

export const useAppDispatch = () => useDispatch<AppDispatch>()
