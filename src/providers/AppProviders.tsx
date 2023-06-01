// React Imports
import {FC, PropsWithChildren} from 'react'

// Package Imports
import {Provider} from 'react-redux'

// Util and Lib Imports
import {store} from '../libs'

export const AppProviders: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
