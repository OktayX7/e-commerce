// Component Imports
import {Layout} from 'components/Layout'

// Package Imports
import {Outlet} from 'react-router'

// Provider Imports
import {AppProviders} from './providers'

// React Imports
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

function capitalizeWords(text: string) {
  return text.replace(/\b\w/g, function (l) {
    return l.toUpperCase()
  })
}

function App() {
  const location = useLocation()
  const {pathname} = location

  useEffect(() => {
    if (pathname === '/') {
      document.title = 'Savoy – Premium Shop Theme for WooCommerce'
    } else if (
      pathname.includes('product/') ||
      pathname.includes('category/') ||
      pathname.includes('blog/') ||
      pathname.includes('order-received/')
    ) {
      const title = pathname.split('/')[2].split('-').join(' ')

      document.title = capitalizeWords(title) + ' - Savoy'
    } else {
      document.title = capitalizeWords(pathname.split('/')[1]) + ' - Savoy'
    }
  }, [pathname])

  return (
    <AppProviders>
      <Layout>
        <Outlet />
      </Layout>
    </AppProviders>
  )
}

export default App
