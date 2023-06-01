// Component Imports
import App from '../App'

// Feature Imports
import {HomePage} from '../features/home/components'
import {LoginPage} from '../features/auth'
import {AboutPage} from 'features/detailPages/about'
import {ContactPage} from 'features/detailPages/contact'
import {WishlistPage} from 'features/wishlist/components'
import {ProductDetail} from 'features/product'
import {BlogDetailPage} from 'features/detailPages/blogDetails'
import {FaqPage} from 'features/detailPages/faq'
import {CheckoutPage, OrderReceivedPage} from 'features/checkout'
import {BlogPage} from 'features/detailPages/blog'

// Package Imports
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/blog/:slug',
        element: <BlogDetailPage />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/wishlist',
        element: <WishlistPage />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/product-category/:slug',
        element: <HomePage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/checkout/order-received/:orderId',
        element: <OrderReceivedPage />,
      },
      {
        path: '/category/:category',
        element: <BlogPage />,
      },
    ],
  },
])

export const RoutesComponent = () => {
  return <RouterProvider router={router} />
}
