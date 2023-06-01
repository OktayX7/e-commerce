// React Imports
import {FC, PropsWithChildren} from 'react'
import {Footer} from './Footer'
import {Header} from './Header'
import {Cart} from 'features/cart'

type LayoutProps = PropsWithChildren

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Cart />
      <Footer />
    </>
  )
}
